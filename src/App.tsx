import './App.css';
import { Group, Layer, Rect, Stage, Text } from 'react-konva';
import React, { useState } from 'react';

type RectProps = {
  num:number
  x:number
  y:number
  w:number
  h:number
  color:string
}

const colors = ['red', 'green', 'yellow', 'blue']

const RectText:React.FC<RectProps> = ({num,x, y, w, h, color}) => {
  return (
  <>
  <Group draggable>
    <Rect x={x} y={y} width={w} height={h}  fill={color}/>
    <Text x={x} y={y} width={w} height={h} text={String(num)} fill="rgba(255,255,255,1)" align='center' verticalAlign='middle' fontSize={30} />
    </Group>
  </>
  )
}

function App() {
  const [color, setColor] = useState<string>(colors[0])
  const [num, setNum] = useState<number>(0)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLImageElement>) =>{
    if (e.code === "ArrowUp"){
      console.log('Up called')
      let n = num+1;
      setNum(n);
      return;
    }
    if (e.code === "ArrowDown"){
      console.log('Down called')
      let n = num-1;
      setNum(n);
      return;
    }
    if (e.code === "ArrowRight" || e.code === "ArrowLeft"){
      const c = colors[Math.floor(Math.random() * 4) ]
      setColor(c)
      return;
    }
  }

  return (
    <>
      <div tabIndex={1}  onKeyDown={handleKeyDown}>
    <Stage width={window.innerWidth} height={window.innerHeight}  >
      <Layer>
        <Text text="Try to drag a rect" />
        <RectText num={num} x={100} y={100} w={100} h={100} color={color}></RectText>
      </Layer>
    </Stage>
      </div>
    </>
  );
}

export default App;
