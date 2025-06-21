function Note() {
  return (
    <div className="px-5">
      <h3 className="text-start">react 생성: rfce</h3>
      <section>
        <h1 className="text-teal-900">tailwind 설치</h1>
        <h3>npm install tailwindcss @tailwindcss/postcss postcss</h3>
        <h3>/postcss.config.mjs</h3>
      <pre>{`const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;`}</pre>
        <h3>./src/app/globals.css</h3>
      <pre>@import "tailwindcss";</pre>
        <h3>./src/app/styles.css</h3>
        <p>실제 사용할때는 styles.css를 import해서 사용(tailwind와 사용자 정의 style을 갖음)</p>
        <p>이를 위해 tailwind를 css로 변환하는 compile 과정이 필요</p>
        <p>실시간으로 변환해주는 스크립트</p>
      <pre>package.json 
  {` =>>
  "scripts": {
    "tailwind": "npx @tailwindcss/cli -i ./src/globals.css -o ./src/styles.css --watch"
   }
  실행은 npm tailwind` }</pre>
        <h2>navbar 구성</h2>
        <h3>npm install react-router-dom</h3>
        <p></p>
        <pre>{`import { BrowserRouter, Routes, Route } from 'react-router-dom';
  <BrowserRouter>
    <div className="centerItem">
      <Link to={'/url'} className="navItem">BASIC</Link>
      ...
    </div>
    <Routes>
      <Route to='/url' element={<Component />} />
      ...
    </Routes>
  </BrowserRouter>`}</pre>
      </section>
    </div>
  )
}

export default Note
