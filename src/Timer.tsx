// import { useState } from 'react';

// const Clock: React.FC = () => {
//   const [time, setTime] = useState(new Date());

//   setInterval(() => {
//     setTime(new Date());
//   }, 1000);

//   return (
//     <div>
//       <span>현재 시간 : {time.toLocaleTimeString()}</span>
//     </div>
//   );
// };

// export default Clock;

import { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearInterval(intervalId);
  }, []); // 빈 배열을 전달하여 처음 마운트될 때만 실행

  return (
    <div>
      <span>현재 시간 : {time.toLocaleTimeString()}</span>
    </div>
  );
};

export default Clock;
