function fetchData(url, callback, method, body) {
    const headers = {
      'Accept': 'application/json',
    };
  
    if (method === 'POST' || method === 'PUT') {
      headers['Content-Type'] = 'application/json';
    }
  
    const options = {
      method,
      headers
    };
  
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
      .catch(err => {
        console.error("Error during fetch:", err);
        if (err.status) {
          err.fullError.then(e => console.log(e.detail));
        } else {
          console.log("Network error");
        }
      });
  }
  
  
  const APIURL = "http://localhost:3000";
  // APIURL + EXERCISE
  const EXERCISEURL = `${APIURL}/exercise`;
  
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
        //SLET MIG
        exercise.id = Math.random().toString(36).substr(2, 9);
        //SLET MIG ^
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
  
  export const facade = {
    mutateExercise,
    getExercises,
    getExerciseById,
    deleteExerciseById
  };
  