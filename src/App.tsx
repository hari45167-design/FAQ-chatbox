import ChatBox from './components/ChatBox';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tighter text-black sm:text-7xl">
            FAQ CHATBOT
          </h1>
          <p className="text-lg text-gray-500 max-w-md mx-auto">
            A universal, cross-platform support widget powered by Gemini AI. 
            Ready to integrate into any website or application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
          {[
            { title: 'Responsive', desc: 'Works on all screen sizes' },
            { title: 'AI Powered', desc: 'Smart answers via Gemini' },
            { title: 'Customizable', desc: 'Easy to style and theme' }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-left">
              <h3 className="font-bold text-black mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-xs font-medium text-gray-400 uppercase tracking-widest">
            Click the icon in the bottom right to start
          </div>
        </div>
      </div>

      <ChatBox />
    </div>
  );
}
