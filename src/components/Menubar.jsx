import { AlignJustify } from "lucide-react";

function Menu() {
  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <button
          style={{ border: "none", background: "none", cursor: "pointer" }}
        >
          <AlignJustify />
        </button>
      </div>
    </>
  );
}

export default Menu;
