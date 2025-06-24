import React from 'react';

const Landing = () => {
  const bgStyle: React.CSSProperties = {
    background: 'radial-gradient(circle at 50% 50%, #1e1e1e 0%, #0d0d0d 80%)',
  };

  return (
    <main
      className="min-h-screen flex justify-center pt-20 px-4 text-slate-200 font-code"
      style={bgStyle}
    >
      <div className="w-full max-w-xl space-y-8">
        <h1 className="text-4xl font-bold">Kyonosuke</h1>

        <section>
          <h2 className="text-2xl font-semibold mb-2">whoami</h2>
          <p className="leading-relaxed">
            hi. im kyon, i watch a lot of isekai and build random stuff on the
            internet. i often share progress on x dot com and open src stuff
            when i feel like it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">blog</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <a
                href="/blog/why-im-building-a-browser"
                className="hover:underline"
              >
                why i’m building a browser
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">projects</h2>

          <ul className="list-disc pl-6 space-y-1">
            <li>
              waifu
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <a
                    href="/projects/waifu/mocap"
                    className="hover:underline"
                  >
                    Video to Motion
                  </a>
                </li>
                <li>
                  <a
                    href="/projects/waifu/oai-waifu"
                    className="hover:underline"
                  >
                    OAI Waifu
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/projects/browser" className="hover:underline">
                browser (pending name)
              </a>
            </li>
            <li>
              <a href="/projects/eliza" className="hover:underline">
                eliza
              </a>
            </li>
            <li>
              <a href="/projects/llim" className="hover:underline">
                LLIM - Large Language Improved
              </a>
            </li>
            <li>
              <a href="/projects/postcaster" className="hover:underline">
                podcast summarizer
              </a>
            </li>
            <li>
              <a href="/projects/shader" className="hover:underline">
                genshin shader
              </a>
            </li>
            <li>
              <a href="/projects/xstream" className="hover:underline">
                x stream Chat
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">contact</h2>
          <p>
            i always read{' '}
            <a href="https://x.com/0xkyon" className="hover:underline">
              dms
            </a>{' '}
            on x dot com unless you’re selling me feet pics.
            <br />there is no other way to reach me.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Landing;
