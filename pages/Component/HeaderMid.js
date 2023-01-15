import Image from "next/image";
const HeaderMid = () => {
  return (
    <div style={{color: '#60A5FA', position: 'relative'}} className="bg-white w-screen text-2xl font-bold text-center" >
       <div style={{
              zindex: 1, 
              position: "absolute",
              marginLeft: '40%',
              width: '25vw', 
              height: '10vh'}}>
              <Image src="/Brush.png" 
              alt="background" 
              layout="fill" 
              objectFit="cover"/>
            </div>
      <div style={{position: 'relative'}}>
      <h1>Ash & Pikachu Arrive in <br />Pokemon Universe</h1>
      </div>
    </div>
  
  );
};

export default HeaderMid;