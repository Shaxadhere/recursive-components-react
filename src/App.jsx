import Folder from "./Folder";
import "./App.css";

const folderData = [
  {
    name: "Root Folder",
    folders: [
      {
        name: "Folder 1",
        folders: [
          {
            name: "Subfolder 1.1",
            folders: [{ name: "Subfolder 1.1.1", folders: [] }],
          },
          { name: "Subfolder 1.2", folders: [] },
        ],
      },
      {
        name: "Folder 2",
        folders: [
          {
            name: "Subfolder 2.1",
            folders: [{ name: "Sub-subfolder 2.1.1", folders: [] }],
          },
        ],
      },
    ],
  },
  {
    name: "Root Folder 2",
    folders: [
      {
        name: "Folder 1",
        folders: [
          {
            name: "Subfolder 1.1",
            folders: [{ name: "Subfolder 1.1.1", folders: [] }],
          },
          { name: "Subfolder 1.2", folders: [] },
        ],
      },
    ],
  },
];

const App = () => {
  return (
    <div className="App">
      {folderData.map((folder, index) => (
        <Folder key={index} folder={folder} />
      ))}
    </div>
  );
};
export default App;
