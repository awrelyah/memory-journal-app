import React, { useEffect, useState } from "react";
import axios from "axios";
import Memorycard from "./Memorycard";
import "../style/memories.css";

function Memories() {
  const [memories, setMemories] = useState([]);

  //fecth data from backend server and keep that in state
  useEffect(() => {
    async function getMemories() {
      await axios
        .get("http://localhost:8000/api/memories")
        .then((memories) => {
          let newMemories = memories.data.data;
          setMemories(newMemories);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    getMemories();
  }, []);

  return (
    <div className="memories">
      <h1>Memories</h1>

      <div className="memory-container">
        {memories.map((memory) => {
          return (
            <Memorycard
              key={memory._id}
              title={memory.title}
              description={memory.description}
              id={memory._id}
              date={memory.date ? memory.date : memory.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Memories;
