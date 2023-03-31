import { useState } from "react";


function App() {
  const [renderImage , setRenderImage]=useState(['https://static.wixstatic.com/media/618f39_005e710387d2445a9ed0b210b306539f~mv2.png/v1/fill/w_2100,h_2100,al_c/618f39_005e710387d2445a9ed0b210b306539f~mv2.png',
'https://www.pngkey.com/png/full/295-2958691_gold-white-washed-pineapple-table-decor-gold.png',
'https://png.pngtree.com/png-clipart/20220123/original/pngtree-golden-table-and-cracked-golden-egg-png-image_7169533.png'])
const [displayImg , setDisplayImg]=useState('');
const [renderLampImg , setRenderLampImg]=useState(['https://i.pinimg.com/originals/63/46/20/6346204bc3fa0c8e6104265090c953e0.png',
'https://www.freepnglogos.com/uploads/lamp-png/caravaggio-read-floor-lamp-light-years-now-nordic-urban-28.png',
'https://www.freepnglogos.com/uploads/lamp-png/download-lamp-download-png-png-image-pngimg-6.png']);
const [displayLampImg , setDisplayLampImg]=useState('');
const [renderFrames , setRenderFrames]=useState(['https://www.pngplay.com/wp-content/uploads/13/Modern-Art-PNG-Clipart-Background.png','https://www.pngplay.com/wp-content/uploads/13/Modern-Art-Transparent-PNG.png','https://www.pngmart.com/files/10/Nature-Wall-Decor-PNG-Transparent-Image.png'])
const [displayFrames , setDisplayFrames]=useState('')
  const imageStyle = {
  //  position:"relative",
    width:"500px",
     height:"300px",
  };
  const tv = {
  position:'absolute',
  top:200,
  right:20,
  width:"70px",
  height:"80px"
  }
  const listImages ={
    width:"100px",
    height:"100px",
    
  }
  const h3Style ={
    paddingLeft:"16px"
  }

  const lamp={
  position:'absolute',
  top:40,
  left:10,
  width:"150px",
  height:"250px"
  }
  const frame ={
   position:'absolute',
  top:40,
  left:200,
  width:"150px",
  height:"150px"
  }
  const spanStyle ={
    flexGrow:1,
    borderRight:"1px solid grey",
    backgroundColor:"white",
     textAlign:"center",
     marginright:"10px"
  }
  const divStyle={
    display:"flex",
     flexDirection:"row", 
     marginLeft:"10px",
     marginBottom:"15px"
  }
  const [tvImage , setTvImage]=useState([])
  const [lampImg , setLampImg] = useState([]);
  const [frameImg , setframeImg] = useState([]);
  const Imagehandler = (index)=>{ 
      if(tvImage.length<=2){
      setTvImage([...tvImage,index])
      }
      setDisplayImg(renderImage[index-1]);
  }
  const LampHandler =(index)=>{
    if(lampImg.length<=2)
    {
      setLampImg([...lampImg,index])
    }
    setDisplayLampImg(renderLampImg[index-1])
  }

  const FrameHandler = (index)=>{
    if(frameImg.length<=2){
      setframeImg([...frameImg,index])
    }
    setDisplayFrames(renderFrames[index-1])
  }
  return (
    <div style={{width:"500px",height:"900px",border:"1px solid black",margin:"auto",backgroundColor:"#dadfe8"}}>
      <div style={{paddingLeft:"16px",fontFamily:"arial",fontSize:"25px",fontWeight:"bold"}}>Decorate my space</div>
      <div style={{position:"relative",top:0,left:0}}>
       
        <img src="https://img.freepik.com/premium-photo/cropped-shot-comfortable-workplace-with-camera-office-supplies-wooden-table-brick-wall_67155-5540.jpg?w=2000" style={imageStyle}/>
      
        
    {displayImg && <img src={displayImg} style={tv}/>}
    {displayLampImg && <img src={displayLampImg} style={lamp}/>}
    {displayFrames && <img src={displayFrames} style={frame}/>}
    
     </div>
     <h3 style={h3Style}>Table decors</h3>
      
      <div style={divStyle}>
        {
           renderImage.map((item, index) => {
           
            return(
              <span key={index+1} onClick={()=> Imagehandler(index+1)} style={spanStyle}><img src={item} style={listImages}/></span>
            )
           })
        }
      
      </div>
      <h3 style={h3Style}>Table lamps</h3> 
      <div style={divStyle}>
        {
          renderLampImg.map((item, index) => {
            return(
              <span key={index+1} onClick={()=> LampHandler(index+1)} style={spanStyle}><img src={item} style={listImages}/></span>
             )
           })
        }
      
      </div>
      <h3 style={h3Style}>Wall decors</h3> 
      <div style={divStyle}>
        {
          renderFrames.map((item, index) => {
            return(
              <span key={index+1} onClick={()=> FrameHandler(index+1)} style={spanStyle}><img src={item} style={listImages}/></span>
             )
           })
        }
      </div>

    </div>
  );
}

export default App;
