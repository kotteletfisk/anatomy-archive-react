function fetchData(url, callback, method, body) {
    const headers = {
      'Accept': 'application/json'
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
      .then(res => res.json())
      .then(data => callback(data))
      .catch(err => {
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
  
  function mutateExercise(exercise) {
    if (exercise.id !== "") {
      // PUT
      editExercise(exercise);
    } else {
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
  
  function createExercise(exercise) {
    fetchData(
      // URL, callback, method, body
      EXERCISEURL,
      () => {},
      "POST",
      exercise
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
  