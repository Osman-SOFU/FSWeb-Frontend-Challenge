export default function Skills() {
  return (
    <div>
      <div>
        <h2>Skills</h2>
      </div>
      <div>
        <div className="flex items-center">
          <img
            src="src/assets/images/jslogo.svg"
            className="w-2 h-2" // Resim boyutunu belirleyin
          />
          <span className="ml-4 mb-4">JAVASCRIPT</span>
        </div>
        <div className="flex items-center">
          <img
            src="src/assets/images/reactlogo.svg"
            className="w-2 h-2" // Resim boyutunu belirleyin
          />
          <span className="ml-4 mb-4">REACT</span>
        </div>
        <div className="flex items-center">
          <img
            src="src/assets/images/reduxlogo.svg"
            className="w-2 h-2" // Resim boyutunu belirleyin
          />
          <span className="ml-4 mb-4">REDUX</span>
        </div>
        <div className="flex items-center">
          <img
            src="src/assets/images/nodelogo.svg"
            className="w-2 h-2" // Resim boyutunu belirleyin
          />
          <span className="ml-4 mb-4">NODE</span>
        </div>
        <div className="flex items-center">
          <img
            src="src/assets/images/vscodelogo.svg"
            className="w-2 h-2" // Resim boyutunu belirleyin
          />
          <span className="ml-4 mb-4">VS CODE</span>
        </div>
        <div className="flex items-center">
          <img
            src="src/assets/images/figmalogo.svg"
            className="w-2 h-2" // Resim boyutunu belirleyin
          />
          <span className="ml-4 mb-4">FIGMA</span>
        </div>
      </div>
    </div>
  );
}
