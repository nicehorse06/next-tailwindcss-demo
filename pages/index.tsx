import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 bg-[url('/background-img-1.png')] bg-no-repeat bg-center">
        <nav className="bg-white border-gray-200 w-[1200px] h-[100px] mt-[40px] rounded-full overflow-hidden text-center ">
          <div className="container flex flex-wrap flex-col justify-end items-center mx-auto h-full">
            <a className="flex h-full pl-[50px] py-[20px] w-2/12" href="#">
              <img className="h-full" src="/logo.png" alt="" />
            </a>
            <div className="flex flex-row justify-end items-center h-full w-10/12">
              <div className="w-[11%]">
                <a href="#" className="block text-[14px] font-sans">サービス概要</a>
              </div>
              <div className="w-[11%]">
                <a href="#" className="block text-[14px]">機能紹介</a>
              </div>
              <div className="w-[11%]">
                <a href="#" className="block text-[14px]">プラン</a>
              </div>
              <div className="w-[11%]">
                <a href="#" className="block text-[14px]">お知らせ</a>
              </div>
              <div className="bg-[#1B7BCC] h-full w-[11%]">
                <img className="h-[70%] p-[10%] pt-[20%] m-auto" src="/mail-icon.png" alt="" />
                <a href="#" className="block h-[30%] text-[12px] pt-[6%] text-white">お問い合わせ</a>
              </div>
              <div className="bg-[#FF65AA] h-full w-[14%]">
                <img className="h-[70%] p-[8%] pr-[30%] m-auto" src="/member-icon.png" alt="" />
                <a href="#" className="block h-[30%] text-[12px] pt-[6%] pr-[22%] text-white">ログイン・登録</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="w-[77%] z-10">
          <div className="pt-[90px]">
            <span className="text-white text-[16px] bg-[#1B7BCC] px-[10px] py-[5px] rounded-lg">マーケティングを持続する顧客管理システム</span>
          </div>
          <div className="text-[#1b7bcc] text-[74px] font-bold leading-[6rem] mt-[30px]">クラウドファンディングを<br></br>成長の先駆けに</div>
          <div className="text-[#555555] text-[16px] mt-[18px] leading-[2rem]">Fundmoreは、クラウドファンディングに特化したCRM顧客管理ステムです。<br></br>アンケート調査、チャットボット、追加購入(EC機能)、物流連携をワンストップでご提供し、<br></br>クラウドファンディングマーケティングをサポートします。</div>
        </div>
        <img className="z-0 w-[75%] absolute left-[328px] top-[425px]" src="/background-img-2.png" alt="" />

      </main>
    </div>
  )
}
