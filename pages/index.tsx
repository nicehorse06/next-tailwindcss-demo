import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 text-center bg-[url('https://fundmore.net/assets/img/frontpage/background-img-1.png')]">
        <nav className="bg-white border-gray-200 w-[1200px] h-[100px] mt-[40px] rounded-full overflow-hidden">
          <div className="container flex flex-wrap flex-col justify-end items-center mx-auto h-full">
            <a className="flex h-full pl-[50px] py-[20px] w-2/12" href="#">
              <img className="h-full" src="https://fundmore.net/assets/img/frontpage/logo.png" alt="" />
            </a>
            <div className="flex flex-row justify-end items-center h-full w-10/12">
              <div className="w-[12%]">
                <a href="#" className="block text-[14px] border-b border-gray-100 md:border-0">サービス概要</a>
              </div>
              <div className="w-[12%]">
                <a href="#" className="block text-[14px] border-b border-gray-100 md:border-0">機能紹介</a>
              </div>
              <div className="w-[12%]">
                <a href="#" className="block text-[14px] border-b border-gray-100 md:border-0">プラン</a>
              </div>
              <div className="w-[12%]">
                <a href="#" className="block text-[14px] border-b border-gray-100 md:border-0">お知らせ</a>
              </div>
              <div className="bg-[#1B7BCC] h-full w-[12%]">
                <img src="https://fundmore.net/assets/img/frontpage/mail-icon.png" alt="" />
                <a href="#" className="block text-[12px] py-2 text-white border-b border-gray-100 md:border-0">お問い合わせ</a>
              </div>
              <div className="bg-[#FF65AA] h-full w-[14%]">
                <img src="https://fundmore.net/assets/img/frontpage/member-icon.png" alt="" />
                <a href="#" className="block text-[12px] py-2 text-white border-b border-gray-100 md:border-0">ログイン・登録</a>
              </div>
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
