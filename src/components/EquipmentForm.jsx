import { useRef } from "react";

function EquipmentForm({ submit }) {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const mediaPathRef = useRef();

  return (
    <>
      <h2>EquipmentForm</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Enter name" ref={nameRef} />

      <label htmlFor="Description">Description</label>
      <input
        type="text"
        id="Description"
        placeholder="Enter description"
        ref={descriptionRef}
      />

      <label htmlFor="mediaPath">MediaPath</label>
      <input
        type="text"
        id="mediaPath"
        placeholder="Enter mediaPath"
        ref={mediaPathRef}
      />

      <button
        onClick={() => {
          const quipment = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            mediaPath: mediaPathRef.current.value,
          };
          submit(quipment);
        }}
      >
        Submit
      </button>
    </>
  );
}

export default EquipmentForm;
