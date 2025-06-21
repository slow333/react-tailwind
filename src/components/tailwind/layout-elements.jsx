

function LayoutEls() {
  return (
    <div>
      <h1>Flex, Grid</h1>
      <section>
        <div className="text-4xl text-center mt-5">flex</div>
        <p>flex는 기본이 row, flex-col 해야 컬럼으로 지정, justify, items 로 정렬</p>
        <div className="text-3xl">flex flex-col</div>
        <p>간격은 space-y-5 같이하면됨</p>
        <div className="flex flex-col justify-between items-center space-y-6 mb-5">
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
          <div className="h-16 w-16 rounded-full bg-orange-500"></div>
          <div className="h-16 w-16 rounded-full bg-green-500"></div>
          <div className='h-16 w-full rounded-full bg-green-500 baseCenter'>
            h-16, w-full, justify-center: 전체폭에서 가운데, items-center: row에서 center</div>
        </div>
        <div className="text-3xl">flex(flex-row)</div>
        <p>간격은 space-x-5 같이하면됨</p>
        <div className="flex justify-between items-end space-x-6">
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
          <div className="h-16 w-16 rounded-full bg-orange-500"></div>
          <div className="h-16 w-16 rounded-full bg-green-500"></div>
          <div className='h-16 w-full rounded-full bg-green-500 baseCenter'>w-full 하면 나머지를 차지함</div>
        </div>
        <div className="text-4xl text-center mt-5">Grid</div>
        <p>grid grid-num 하면 전체를 num 만큼 배분해서 할당함 남으면 공백</p>
        <div className="grid grid-cols-5 gap-2  mx-2">
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
          <div className="h-16 w-16 rounded-full bg-orange-500"></div>
          <div className="h-16 w-16 rounded-full bg-green-500"></div>
        </div>
          <div className="min-h-screen grid place-content-center">
          <h1 className="bg-emerald-400 w-33 h-33 rounded-full shadow-2xl grid place-content-center">
            <div className="bg-teal-700 w-10 h-10"></div>
          </h1>
        </div>
      </section>
    </div>
  )
}

export default LayoutEls
