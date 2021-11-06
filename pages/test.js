import Head from 'next/head'
import toast, { Toaster } from 'react-hot-toast';

function handle(platform){
  toast.loading('Redirecting...', {duration: 1000})
  setTimeout(function () {
    toast.success("Success!", {icon: "🚀"})
    setTimeout(function () {
      if(platform === "discord") {
        window.open("https://discord.gg/HbzXH9shbM", "_blank");
      }
   	  else if(platform === "slack") {
   	  	window.open("https://moonauth.slack.com", "_blank");
      }
   	  else if(platform === "twitter") {
   	  	window.open("https://twitter.com/moonauthhq", "_blank");
      }
      else if(platform === "github") {
        window.open("https://github.com/moonauth", "_blank");
      }
      }, 300);
  }, 700);
}

const notify = () => toast.success('Link copied to clipboard!');
//const redirect = () => toast.loading('Redirecting...')

export default function Home() {
  return (
    <div>

      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#253141',
            color: '#FFF',
            borderRadius: "1rem",
            padding: "0.7rem",
            paddingLeft: "1rem",
            fontFamily: "DM Sans, sans-serif",
          },
        }}
      />

      <Head>
        <title>Moonauth: Coming Soon</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="bg-moonwhite h-screen">
        <div className="w-full flex flex-wrap h-full">

			    <div className= "md:pt-0 w-full md:flex-1 md:order-last">
			    	<img src="/hand.jpg" className="w-full h-64 md:h-full object-cover" />
			    </div>
          <div className= "md:pt-0 w-full flex-1 md:order-first">
            <div className="relative md:p-2">
              <div className="w-36 pb-10">
                <img src="/moonauth.svg"></img>
              </div>
			    		  <h1 className="text-5xl md:text-7xl mb-10 leading-1 font-dm_serif">Passwords are about to become <h1 className="text-transparent bg-clip-text bg-gradient-to-tl from-g_blue to-g_orange">obsolete.</h1></h1>
			    		  <h2 className="text-2xl mb-1 font-dm_sans">We are still in development</h2>
                <h2 className="text-2xl mb-4 font-dm_sans">Join us and be part of this journey!</h2>
              <div className="w-full flex mt-16 font-dm_sans font-medium md:w-11/12">
                <a onClick={() => handle("discord")} className="bg-moonwhite_dark hover:bg-moonwhite_hover transition-all text-moonblack p-3 rounded-2xl px-5 mr-5" ><img src="/social/discord.svg" className="w-5 inline-block mr-3 fill-current opacity-70"></img>Discord</a>
                <a onClick={() => handle("slack")} className="bg-moonwhite_dark hover:bg-moonwhite_hover transition-all text-moonblack p-3 rounded-2xl px-5 mr-5" ><img src="/social/slack.svg" className="w-5 inline-block mr-3 fill-current opacity-70"></img>Slack</a>
                <a onClick={() => handle("github")} className="bg-moonwhite_dark hover:bg-moonwhite_hover transition-all text-moonblack p-3 rounded-2xl px-5 mr-5" ><img src="/social/twitter.svg" className="w-5 inline-block mr-3 fill-current opacity-70"></img>Twitter</a>
                <a onClick={() => handle("twitter")} className="bg-moonwhite_dark hover:bg-moonwhite_hover transition-all text-moonblack p-3 rounded-2xl px-5 mr-5" ><img src="/social/github.svg" className="w-5 inline-block mr-3 fill-current opacity-70"></img>GitHub</a>
              </div>
			    	</div>
			    </div>

		    </div>
      </main>
      
    </div>
  )
}
