function fetchData(url, callback, method, body) {
  const headers = {
    Accept: "application/json",
  };

  if (method === "POST" || method === "PUT") {
    headers["Content-Type"] = "application/json";
  }

  const options = makeOptions(method, body, true); //True add's the token

  if (body) {
    options.body = JSON.stringify(body);
  }

  fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => callback(data))
    .catch(handleHttpErrors);
}

const MOCK_URL = "http://localhost:3000";
const APIURL = "http://localhost:7070";
// APIURL + EXERCISE
const EXERCISEURL = `${APIURL}/exercise`;
const AUTHENTICATION_ROUTE = "/auth/login";
const MUSCLEURL = `${APIURL}/muscle`;

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

const login = (user, pass, callback) => {
  const payLoad = { username: user, password: pass };
  const options = makeOptions("POST", payLoad);
  return fetch(APIURL + AUTHENTICATION_ROUTE, options)
    .then(handleHttpErrors)
    .then((data) => {
      callback(true);
      setToken(data.token);
    })
    .catch((err) => {
      if (err.status) {
        // err.fullError.then((e) => errorCallback(e.message));
        // return Promise.reject({ status: err.status, message: err.message });
        return err.fullError.then((e) =>
          Promise.reject({ status: e.status, message: e.message })
        );
      } else {
        return Promise.reject({ message: "Network error" });
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
  fetchData(`${EXERCISEURL}/${exercise.id}`, () => {}, "PUT", exercise);
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
  if (typeof exercise.id === "number" && exercise.id > 0) {
    // PUT
    editExercise(exercise);
  } else {
    // POST
    createExercise(exercise);
  }
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

function getExerciseById(exerciseId, callback) {
  // fetch data
  fetchData(
    `${EXERCISEURL}/${exerciseId}`,
    // callback
    callback,
    "GET"
  );
}

function getMuscleById(muscleId, callback) {
  // fetch data
  fetchData(
    `${APIURL}/muscle/${muscleId}`,
    // callback
    (data) => {
      console.log(data);
      //console.log APIURL and muscleId
      console.log(`${APIURL}/muscle/${muscleId}`);
      callback(data); // Pass the data to the provided callback function
    },
    "GET"
  );
}

function editMuscle(muscle) {
  fetchData(
    `${APIURL}/muscle/${muscle.id}`,
    () => {
      // You can handle the callback logic here if needed
    },
    "PUT",
    muscle
  );
}

function createMuscle(muscle) {
  fetchData(
    // URL, callback, method, body
    `${APIURL}/muscle`,
    () => {},
    "POST",
    muscle
  );
}

function mutateMuscle(muscle) {
  if (typeof muscle.id === "number" && muscle.id > 0) {
    // PUT
    editMuscle(muscle);
  } else {
    // POST
    createMuscle(muscle);
  }
}

function deleteMuscleById(muscleId) {
  // delete muscle from api
  fetchData(`${APIURL}/muscle/${muscleId}`, () => {}, "DELETE");

  // delete from muscle array via setmuscles()
}

function getEquipmentById(equipmentId, callback) {
  // fetch data
  fetchData(
    `${APIURL}/equipment/${equipmentId}`,
    // callback
    (data) => {
      console.log(data);
      //console.log APIURL and equipmentId
      console.log(`${APIURL}/equipment/${equipmentId}`);
      callback(data); // Pass the data to the provided callback function
    },
    "GET"
  );
}

function editEquipment(equipment) {
  fetchData(
    `${APIURL}/equipment/${equipment.id}`,
    () => {
      // You can handle the callback logic here if needed
    },
    "PUT",
    equipment
  );
}

function createEquipment(equipment) {
  fetchData(
    // URL, callback, method, body
    `${APIURL}/equipment`,
    () => {},
    "POST",
    equipment
  );
}

function mutateEquipment(equipment) {
  if (typeof equipment.id === "number" && equipment.id > 0) {
    // PUT
    editEquipment(equipment);
  } else {
    // POST
    createEquipment(equipment);
  }
}

function deleteEquipmentById(equipmentId) {
  // delete equipment from api
  fetchData(`${APIURL}/equipment/${equipmentId}`, () => {}, "DELETE");

  // delete from equipment array via setequipment()
}

function mutateSomething(entityType, entity) {
  switch (entityType) {
    case "exercise":
      console.log("1");
      mutateExercise(entity);
      break;
    case "muscle":
      console.log("2");
      mutateMuscle(entity);
      break;
    case "equipment":
      console.log("3");
      mutateEquipment(entity);
      break;
  }
}

function getSomethingById(entity, id, callback) {
  switch (entity) {
    case "exercise":
      getExerciseById(id, callback);
      break;
    case "muscle":
      getMuscleById(id, callback);
      break;
    case "equipment":
      getEquipmentById(id, callback);
      break;
  }
}

function deleteSomethingById(entity, id) {
  switch (entity) {
    case "exercise":
      deleteExerciseById(id);
      break;
    case "muscle":
      deleteMuscleById(id);
      break;
    case "equipment":
      deleteEquipmentById(id);
      break;
  }
}

export const crud = {
  mutateExercise,
  mutateSomething,
  getExercises,
  getExerciseById,
  getMuscleById,
  getEquipmentById,
  getSomethingById,
  deleteSomethingById,
  deleteExerciseById,
  fetchData,
  getAllMusclegroups,
  getAllExerciseTypes,
  getAllMuscles,
  getAllEquipment,
};

export const auth = {
  login,
  logout,
  getToken,
  getUserRoles,
  hasUserAccess,
};

function getAllMuscles(callback) {
  fetchData(
    `http://localhost:7070/search/muscle/bymuscle?pattern=`,
    callback,
    "GET"
  );
}

function getAllEquipment(callback) {
  fetchData(
    `http://localhost:7070/search/equipment/byequipment?pattern=`,
    callback,
    "GET"
  );
}

function getAllExerciseTypes(callback) {
  fetchData(
    `http://localhost:7070/search/type/bytype?pattern=`,
    callback,
    "GET"
  );
}

function getAllMusclegroups(callback) {
  fetchData(
    `http://localhost:7070/search/musclegroup/bymusclegroup?pattern=`,
    callback,
    "GET"
  );
}
