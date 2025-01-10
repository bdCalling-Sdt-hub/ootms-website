"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function DragDropApp() {
  const items = [
    { id: 1, name: "data1", isActive: true },
    { id: 2, name: "data2", isActive: true },
    { id: 3, name: "data3", isActive: false },
    { id: 4, name: "data4", isActive: true },
  ];

  const box2Ref = useRef(null);
  const [dragData, setDragData] = useState(null);

  // Function to handle dropping the item into Box 2
  const handleDragEnd = (event, info) => {
    const box2Rect = box2Ref.current.getBoundingClientRect();
    // Check if the item was dropped within the bounds of Box 2
    if (
      info.point.x >= box2Rect.left &&
      info.point.x <= box2Rect.right &&
      info.point.y >= box2Rect.top &&
      info.point.y <= box2Rect.bottom
    ) {
      const itemId = parseInt(event.target.getAttribute("data-id"));
      const item = items.find((item) => item.id === itemId);
      setDragData(item);
    }
  };

  console.log(dragData);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      <div>
        <h2>Box 1 (Drag from here)</h2>
        {items.map((item) => (
          <motion.div
            key={item.id}
            data-id={item.id} // Track which item is being dragged
            initial={{ y: 3 }}
            animate={{ y: -3 }}
            transition={{
              ease: "easeInOut",
              repeat: Infinity,
              duration: 0.5,
              repeatType: "reverse",
            }}
            drag
            dragListener
            dragSnapToOrigin
            onDragEnd={handleDragEnd}
            style={{
              margin: "10px",
              padding: "5px",
              border: "1px solid black",
            }}
          >
            {item.name}
          </motion.div>
        ))}
      </div>
      <div
        ref={box2Ref} // Reference to Box 2 for bounding rectangle checks
        style={{
          width: "200px",
          height: "100px",
          border: "1px solid blue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Box 2 (Drop here)</h2>
        {dragData && <div>{dragData.name}</div>}
      </div>
    </div>
  );
}

export default DragDropApp;
