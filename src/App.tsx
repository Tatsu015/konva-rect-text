import './App.css';
import { Group, Layer, Rect, Stage, Text } from 'react-konva';
import React, { useState } from 'react';

type RectProps = {
  x:number
  y:number
  w:number
  h:number
}

const colors = ['red', 'green', 'yellow', 'blue']

const RectText:React.FC<RectProps> = ({x, y, w, h}) => {
  const [color, setColor] = useState<string>(colors[0])
  const handleClick = () =>{
    const c = colors[Math.floor(Math.random() * 4) ]
    console.log(c);
    setColor(c)
  }

  return (
  <>
  <Group draggable onClick={handleClick}>
    <Rect x={x} y={y} width={w} height={h}  fill={color}/>
    <Text x={x} y={y} width={w} height={h} text="AAAA" fill="rgba(255,255,255,1)" align='center' verticalAlign='middle' fontSize={30} />
    </Group>
  </>
  )
}

function App() {
  return (
    <>
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Try to drag a rect" />
        <RectText x={100} y={100} w={100} h={100}></RectText>
      </Layer>
    </Stage>
    </>
  );
}

export default App;
