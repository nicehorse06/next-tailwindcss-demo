import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 text-center bg-[url('https://fundmore.net/assets/img/frontpage/background-img-1.png')]">
        <nav className="bg-white border-gray-200 w-[1200px] h-[100px] mt-[40px] rounded-full">
          <div className="container flex flex-wrap items-center mx-auto h-full">
            <a className="flex h-full ml-[50px] py-[20px]" href="#">
              <img className="h-full w-full" src="https://fundmore.net/assets/img/frontpage/logo.png" alt="" />
            </a>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className="flex flex-col justify-end mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a href="#" className="block text-[14px] py-2 border-b border-gray-100 md:border-0">サービス概要</a>
                </li>
                <li>
                  <a href="#" className="block text-[14px] py-2 border-b border-gray-100 md:border-0">機能紹介</a>
                </li>
                <li>
                  <a href="#" className="block text-[14px] py-2 border-b border-gray-100 md:border-0">プラン</a>
                </li>
                <li>
                  <a href="#" className="block text-[14px] py-2 border-b border-gray-100 md:border-0">お知らせ</a>
                </li>
                <li className="bg-[#1B7BCC]">
                  <img src="https://fundmore.net/assets/img/frontpage/mail-icon.png" alt="" />
                  <a href="#" className="block text-[12px] py-2 text-white border-b border-gray-100 md:border-0">お問い合わせ</a>
                </li>
                <li className="bg-[#FF65AA]">
                  <img src="https://fundmore.net/assets/img/frontpage/member-icon.png" alt="" />
                  <a href="#" className="block text-[12px] py-2 text-white border-b border-gray-100 md:border-0">ログイン・登録</a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        <div className="text-white text-[16px] bg-[#1B7BCC]">マーケティングを持続する顧客管理システム</div>
        <div className="text-[#1b7bcc] text-[74px]">クラウドファンディングを<br></br>成長の先駆けに</div>
        <div className="text-[#555555] text-[16px">Fundmoreは、クラウドファンディングに特化したCRM顧客管理ステムです。<br></br>アンケート調査、チャットボット、追加購入(EC機能)、物流連携をワンストップでご提供し、<br></br>クラウドファンディングマーケティングをサポートします。</div>
      </main>
    </div>
  )
}
