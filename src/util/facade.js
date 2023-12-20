function fetchData(url, callback, method, body) {
    const headers = {
      'Accept': 'application/json',
    };
  
    if (method === 'POST' || method === 'PUT') {
      headers['Content-Type'] = 'application/json';
    }
  
    const options = makeOptions(method, body, true); //True add's the token
  
    if (body) {
      options.body = JSON.stringify(body);
    }
  
    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => callback(data))
      .catch(handleHttpErrors);
  }
  
  
  const MOCK_URL = "http://localhost:3000";
  const APIURL = "http://localhost:7070";
  // APIURL + EXERCISE
  const EXERCISEURL = `${APIURL}/exercise`;
  const AUTHENTICATION_ROUTE = "/auth/login";


  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };

  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };

  const logout = (callback) => {
    localStorage.removeItem("jwtToken");
    callback(false);
  };

  const handleHttpErrors = (res) => {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  };

  const login = (user, pass, callback, errorCallback) => {
    const payLoad = { username: user, password: pass };
    const options = makeOptions("POST", payLoad);

    return fetch(APIURL + AUTHENTICATION_ROUTE, options)
      .then(handleHttpErrors)
      .then((data) => {
        callback(true);
        setToken(data.token);
        console.log(data.token);
      })
      .catch((err) => {
        if (err.status) {
          err.fullError.then((e) => errorCallback(e.message));
        } else {
          console.log("Network error");
        }
      });
  };

  const makeOptions = (method, payload, addToken) => {
    const opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };

    if (addToken) {
      opts.headers["Authorization"] = `Bearer ${getToken()}`;
    }

    if (payload) {
      opts.body = JSON.stringify(payload);
    }
    return opts;
  };

  const getUserRoles = () => {
    const token = getToken();
    if (token != null) {
      const payloadBase64 = getToken().split(".")[1];
      const decodedClaims = JSON.parse(window.atob(payloadBase64));
      const roles = decodedClaims.roles;
      return roles;
    } else return "";
  };

  const hasUserAccess = (neededRole, loggedIn) => {
    const roles = getUserRoles().split(",");
    return loggedIn && roles.includes(neededRole);
  };
  
  function editExercise(exercise) {
    fetchData(`${EXERCISEURL}/${exercise.id}`, () => {
      // You can handle the callback logic here if needed
    }, "PUT", exercise);
  }

  function createExercise(exercise) {
    fetchData(
      // URL, callback, method, body
      EXERCISEURL,
      () => {},
      "POST",
      exercise
    );
  }
  
  function mutateExercise(exercise) {
    if (exercise.id !== undefined && exercise.id !== null && exercise.id !== "" && exercise.id !== 0 && exercise.id !== "0" && exercise.id !== "undefined" && exercise.id !== "null" && exercise.id !== "NaN" && exercise.id !== NaN && exercise.id !== "false" && exercise.id !== false && exercise.id !== "NaN") { 
      // PUT
      editExercise(exercise);
    } else {
        // POST
      createExercise(exercise);
    }
  }
  
  function getExerciseById(exerciseId, callback) {
    // fetch data
    fetchData(
      `${EXERCISEURL}/${exerciseId}`,
      // callback
      (data) => {
        console.log(data);
        //console.log APIURL and exerciseId
        console.log(`${EXERCISEURL}/${exerciseId}`);
        callback(data); // Pass the data to the provided callback function
      },
      "GET"
    );
  }
  

  
  function getExercises(callback) {
    // fetch data
    fetchData(EXERCISEURL, callback);
  }
  
  function deleteExerciseById(exerciseId) {
    // delete exercises from api
    fetchData(`${EXERCISEURL}/${exerciseId}`, () => {}, "DELETE");
  
    // delete from exercises array via setexercises()
  }
  
  export const crud = {
    mutateExercise,
    getExercises,
    getExerciseById,
    deleteExerciseById,
    fetchData
  };

  export const auth = {
    login,
    logout,
    getToken,
    getUserRoles,
    hasUserAccess,
  };
