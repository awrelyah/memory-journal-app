import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Memorycard from "./Memorycard";
import "../style/memories.css";

function Memory(props) {
  const { id } = useParams();
  const [memory, setMemory] = useState([]);

  useEffect(() => {
    async function getMemory() {
      await axios
        .get(`http://localhost:8000/api/memories/${id}`)
        .then((item) => {
          let currMemory = item.data.data;
          setMemory(currMemory);
          console.log(item);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getMemory();
  }, []);

  //for some reason date from this Memory file throws error ??? (invalid time) but on Memories its fine, idk
  return (
    <div className="memory-container">
      <Memorycard
        key={memory._id}
        title={memory.title}
        description={memory.description}
        id={memory._id}
        date={memory.date ? memory.date : memory.createdAt}
        memoryById={true}
      />
    </div>
  );
}

export default Memory;
