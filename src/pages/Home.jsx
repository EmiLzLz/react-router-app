import React from "react";

function Home() {
  return (
    <div className="home w-full bg-[#030301] text-white">
      <h1>REACT ROUTER APP</h1>
      <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto">
        <div className="option-1 border h-96 md:h-screen w-full overflow-hidden flex flex-col items-center justify-center relative">
          <h2 className="text-center font-bold">SEE ALL PRODUCTS</h2>
          <div className="hover-effect-1 border border-red-600 h-full absolute text-center p-2 flex flex-col justify-center">
            <h3 className="text-[#6BD425] font-bold">SOME TITLE</h3>
            <p className="text-[#6247AA]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque incidunt quidem distinctio quaerat mollitia saepe vitae
              iste a. Nesciunt distinctio soluta voluptatibus quod doloremque
              nulla asperiores similique suscipit repudiandae perferendis.
            </p>
          </div>
        </div>
        <div className="option-2 border h-96 md:h-screen w-full overflow-hidden flex flex-col items-center justify-center relative">
          <h2 className="text-center w-full font-bold">SEARCH PRODUCT</h2>
          <div className="hover-effect-2 border border-red-600 h-full w-full absolute text-center p-2 flex flex-col justify-center">
            <h3 className="text-[#6BD425] font-bold">SOME TITLE</h3>
            <p className="text-[#6247AA]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque incidunt quidem distinctio quaerat mollitia saepe vitae
              iste a. Nesciunt distinctio soluta voluptatibus quod doloremque
              nulla asperiores similique suscipit repudiandae perferendis.
            </p>
          </div>
        </div>
        <div className="option-3 border h-96 md:h-screen w-full overflow-hidden flex flex-col items-center justify-center relative">
          <div className="hover-effect-3 border border-red-600 h-full absolute text-center p-2 flex flex-col justify-center">
            <h3 className="text-[#6BD425] font-bold">SOME TITLE</h3>
            <p className="text-[#6247AA]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque incidunt quidem distinctio quaerat mollitia saepe vitae
              iste a. Nesciunt distinctio soluta voluptatibus quod doloremque
              nulla asperiores similique suscipit repudiandae perferendis.
            </p>
          </div>
          <h2 className="text-center font-bold">ABOUT THE APP</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
