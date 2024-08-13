import React, { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

const Folder = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div>
      <div onClick={toggleOpen} style={{ cursor: "pointer" }}>
        {isOpen ? <FaFolderOpen /> : <FaFolder />} {folder.name}
      </div>
      {isOpen && (
        <div style={{ paddingLeft: 20 }}>
          {folder.folders.map((subfolder, index) => (
            <Folder key={index} folder={subfolder} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
