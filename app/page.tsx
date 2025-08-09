
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showFAQ, setShowFAQ] = useState<{ [key: string]: boolean }>( {});

  const toggleFAQ = (id: string) => {
    setShowFAQ(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 px-6 py-12 text-center">
        <div className="mx-auto max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
            「なんとなく経営」から卒業する！
          </h1>
          <h2 className="text-lg text-gray-700 mb-8">
            小さな会社の社長のための
            「根拠ある戦略」の描き方
          </h2>
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20business%20consultant%20woman%20presenting%20strategy%20charts%20and%20graphs%2C%20modern%20office%20background%2C%20confident%20and%20approachable%2C%20business%20meeting%20atmosphere%2C%20clean%20and%20professional%20look%2C%20natural%20lighting%2C%20corporate%20photography%20style&width=300&height=200&seq=hero1&orientation=landscape"
            alt="戦略を描く"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Problems Section */}
      <div className="px-6 py-8">
        <h3 className="text-xl font-bold text-center mb-6 text-gray-800">
          こんな悩みを抱えていませんか？
        </h3>
        <div className="space-y-4 max-w-md mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-pink-100">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-error-warning-line text-pink-500"></i>
              </div>
              <p className="text-gray-700 text-sm">
                経営の判断がすべて勘と経験…これで本当に大丈夫か不安になる
              </p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-pink-100">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-error-warning-line text-pink-500"></i>
              </div>
              <p className="text-gray-700 text-sm">
                売上はあるけど、利益が残ってない
              </p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-pink-100">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-error-warning-line text-pink-500"></i>
              </div>
              <p className="text-gray-700 text-sm">
                価格を下げないと選ばれないと考えている
              </p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-pink-100">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-error-warning-line text-pink-500"></i>
              </div>
              <p className="text-gray-700 text-sm">
                ChatGPTって聞いたことあるけど、難しそうなので触ってない
              </p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-pink-100">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-error-warning-line text-pink-500"></i>
              </div>
              <p className="text-gray-700 text-sm">
                補助金や融資の申請、「計画を出してください」で手が止まる
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="px-6 py-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-lg font-bold mb-4 text-gray-800">
            実はそれ、ただの「数字の見えなさ」と
            「根拠のなさ」が原因かもしれません
          </h3>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            勘と経験に頼る経営では、未来の見通しを描けず、選ばれる理由も語れません。
            今こそ「なんとなく経営」から抜け出すタイミングなのです。
          </p>
          <img 
            src="https://readdy.ai/api/search-image?query=Data%20analytics%20dashboard%20with%20charts%2C%20graphs%20and%20numbers%20on%20computer%20screen%2C%20business%20intelligence%20visualization%2C%20clean%20modern%20interface%2C%20professional%20analytics%20tools%2C%20strategic%20planning%20concept&width=280&height=180&seq=solution1&orientation=landscape"
            alt="データ分析"
            className="w-full h-44 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Check Section */}
      <div className="px-6 py-8 bg-yellow-50">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-center mb-4 text-gray-800">
              当てはまる人は読み進めてください
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 justify-center">
                <div className="w-4 h-4 border-2 border-blue-500 rounded"></div>
                <p className="text-sm text-gray-700">
                  「これでいいのか」と経営に不安を感じたことがある
                </p>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <div className="w-4 h-4 border-2 border-blue-500 rounded"></div>
                <p className="text-sm text-gray-700">
                  数字に自信がないけど、経営を整えたい
                </p>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <div className="w-4 h-4 border-2 border-blue-500 rounded"></div>
                <p className="text-sm text-gray-700">
                  「安さで勝負する経営」から脱却したい
                </p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
              このように感じたことがある方は、続きをお読みください。
            </p>
          </div>
        </div>
      </div>

      {/* Instructor Profile */}
      <div className="px-6 py-8">
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-800">
            講師紹介
          </h3>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-center mb-4">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20business%20woman%20consultant%2C%20friendly%20and%20approachable%20smile%2C%20modern%20office%20background%2C%20professional%20headshot%20photography%2C%20natural%20lighting%2C%20confident%20and%20trustworthy%20appearance&width=120&height=120&seq=instructor1&orientation=squarish"
                alt="中原麻夏"
                className="w-24 h-24 rounded-full mx-auto mb-3 object-cover shadow-md"
              />
              <h4 className="font-bold text-gray-800">中原麻夏</h4>
              <p className="text-sm text-gray-600">起業家・マーケティングコンサルタント</p>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              こんにちは。講師の中原麻夏です。
              私は、2020年のコロナ禍に、子ども向けプログラミング教室を立ち上げ、初年度で全国4位の生徒数を達成した起業家です。
              以前はエンジニアでしたが、マーケティングとAIを学んで、全くの初心者から結果を出してきました。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              今では、売上・契約率・継続率の改善を得意とし、多くの起業家や小規模事業者のご相談に乗らせていただいています。
            </p>
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4">
              <p className="text-xs text-gray-600 leading-relaxed">
                開校2年目で年商790万円（業界平均の3～5倍）、チラシ反応率0.2%（業界平均の2倍）、契約率60％→70％に改善、iTeen講師部門最優秀賞（2022年）受賞
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="px-6 py-8 bg-white">
        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
            <h4 className="font-bold text-gray-800 mb-4">私の経験談</h4>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                私が、自分の手で事業を立ち上げたとき、支えになったのは、起業前から学んでいたマーケティングの知識でした。
              </p>
              <p>
                チラシ1枚にも「届けたい相手に、どう伝わるか？」を考え、試行錯誤を繰り返しながら、開校初年度から順調に生徒数を増やすことができました。
                ただ、成長するにつれて、業務の煩雑さや意思決定のスピードに課題を感じました。
              </p>
              <p>
                そこで出会ったのが、ChatGPT（AI）です。
                業界分析、企画、計画立案、コピーライティング…
                すべての仕事が、以前よりも「速く・深く・確実に」できるようになり、より多くの方に価値を届けられるようになりました。
              </p>
              <p>
                今では、講座やコンサルティングの中で、多くの方の「迷い」にAIとマーケティングを活用して光を当てるお手伝いをしています。
              </p>
              <p>
                最初から完璧じゃなくて良かった。
                それでも、「自分の進む道に根拠を持ちたい」と願う方には、AIとマーケティングがきっと心強い味方になってくれるでしょう。
                今度は、あなたの番です。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-6 py-8 bg-gradient-to-r from-purple-100 to-pink-100 text-center">
        <h3 className="text-lg font-bold mb-4 text-gray-800">
          あなたも「この方向でいい」と、 
          自信を持って言える経営者になりませんか？
        </h3>
        <img 
          src="https://readdy.ai/api/search-image?query=Successful%20business%20growth%20concept%2C%20arrow%20pointing%20upward%20with%20charts%20and%20graphs%2C%20achievement%20and%20progress%20visualization%2C%20modern%20business%20success%20illustration%2C%20professional%20and%20motivational%20design&width=260&height=160&seq=cta1&orientation=landscape"
          alt="成功への道筋"
          className="w-full h-40 object-cover rounded-lg shadow-md mb-6"
        />
      </div>

      {/* Results & Achievements */}
      <div className="px-6 py-8 bg-white">
        <div className="max-w-md mx-auto">
          <h4 className="font-bold text-center mb-6 text-gray-800">信頼性を高める事例と実績</h4>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• プログラミング教室：開校2年目で年商790万円（業界平均の3～5倍）</li>
              <li>• チラシ反応率0.2%（業界平均の2倍）</li>
              <li>• 契約率60％→70％に改善</li>
              <li>• 継続率を定量管理、LTVの高いモデルを確立</li>
              <li>• 生徒は県大会・全国コンテストで多数受賞</li>
              <li>• iTeen講師部門最優秀賞（2022年）</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success vs Failure Mindset */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-md mx-auto">
          <h4 className="font-bold text-center mb-6 text-gray-800">うまくいく価値観、失敗する価値観</h4>
          
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h5 className="font-semibold text-green-800 mb-3">うまくいく価値観</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 数字と現実と向き合う</li>
                <li>• 競合との違いを見つけて活かす戦略性</li>
                <li>• 顧客に「選ばれる理由」を言語化しようとする姿勢</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h5 className="font-semibold text-red-800 mb-3">うまくいかない価値観</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 「うちは小さいから価格で勝負しかない」と思い込む</li>
                <li>• 経営は「感覚と根性」だけで何とかなると思っている</li>
                <li>• 変化やツール（AI）を遠ざける</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Target Audience */}
      <div className="px-6 py-8 bg-white">
        <div className="max-w-md mx-auto">
          <h4 className="font-bold text-center mb-6 text-gray-800">こんな人におすすめです</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 border-2 border-blue-500 rounded"></div>
              <p className="text-sm text-gray-700">小さな会社の経営者で、これまで感覚で経営してきた方</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 border-2 border-blue-500 rounded"></div>
              <p className="text-sm text-gray-700">「価値で選ばれる経営」にシフトしたい方</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 border-2 border-blue-500 rounded"></div>
              <p className="text-sm text-gray-700">ChatGPTを使って、経営の芯を整えたい方</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 border-2 border-blue-500 rounded"></div>
              <p className="text-sm text-gray-700">補助金・融資に必要な計画書づくりが苦手な方</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
              <h3 className="font-bold text-lg mb-2">
                【第3回】勘に頼らない！ 
              </h3>
              <p className="text-sm opacity-90">
                小さな会社の社長のための「根拠ある戦略」をAI×マーケティングで描く講座
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-calendar-line text-purple-500"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">8月19日（火）21:00〜22:00</p>
                    <p className="text-xs text-gray-600">オンライン（Zoom）開催</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-lightbulb-line text-purple-500"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                      ChatGPTを活用し、売上・経費・利益の見通しを整理。月々どれくらい行動すれば目標達成できるかを明確化。補助金・融資にも対応できる「根拠ある戦略」を構築。
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-2xl font-bold text-purple-600">¥5,000</p>
                    <p className="text-xs text-gray-600">（税込）</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600 line-through">個別コンサル ¥50,000〜</p>
                    <p className="text-xs text-red-600 font-semibold">90%OFF特別価格</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offer */}
      <div className="px-6 py-8 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-yellow-300">
            <div className="w-8 h-8 mx-auto mb-3 flex items-center justify-center">
              <i className="ri-gift-line text-yellow-500 text-xl"></i>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">購入特典</h4>
            <p className="text-sm text-gray-700 mb-2">
              【30分無料個別相談】をプレゼント！
            </p>
            <p className="text-xs text-gray-600">
              講座の内容を、あなたの事業に合わせて落とし込むための個別相談を行います。
            </p>
          </div>
        </div>
      </div>

      {/* Urgency */}
      <div className="px-6 py-6">
        <div className="max-w-md mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <div className="w-6 h-6 mx-auto mb-2 flex items-center justify-center">
              <i className="ri-alarm-warning-line text-red-500"></i>
            </div>
            <p className="font-bold text-red-700 mb-1">先着20名限定</p>
            <p className="text-sm text-red-600">
              申込締切：8月19日（火）20:59まで
            </p>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="px-6 py-6">
        <div className="max-w-md mx-auto space-y-4">
          <button className="!rounded-button w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 shadow-lg transform transition-all duration-200 hover:scale-105">
            <div className="flex items-center justify-center space-x-2">
              <i className="ri-mail-line"></i>
              <span>今すぐ申し込む</span>
            </div>
          </button>
          <p className="text-center text-sm text-gray-600">
            小さな時間がもったいない！ 
            数字で話せる社長への一歩を、今踏み出しませんか。
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 py-8">
        <div className="max-w-md mx-auto">
          <h3 className="text-lg font-bold text-center mb-6 text-gray-800">
            よくある質問
          </h3>
          <div className="space-y-3">
            {[ 
              {
                id: 'faq1',
                question: 'ChatGPTを使ったことがありません。参加できますか？',
                answer: 'はい、大丈夫です。講座前に基本操作をご説明しますので、初心者の方でも安心してご参加いただけます。'
              },
              {
                id: 'faq2',
                question: '有料版が必要ですか？',
                answer: '基本的には無料版でも可能ですが、有料版のほうが精度が高く、講座の効果を最大限活かせます。'
              },
              {
                id: 'faq3',
                question: '録画はありますか？',
                answer: '基本的にはリアルタイムでのご参加をおすすめしていますが、録画視聴をご希望の方はご相談ください。'
              }
            ].map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-100">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-4 py-4 text-left flex items-center justify-between"
                >
                  <p className="text-sm font-medium text-gray-800 pr-4">{faq.question}</p>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={`ri-arrow-down-s-line transform transition-transform duration-200 ${showFAQ[faq.id] ? 'rotate-180' : ''}`}></i>
                  </div>
                </button>
                {showFAQ[faq.id] && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final Message */}
      <div className="px-6 py-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-md mx-auto text-center">
          <h4 className="text-lg font-bold mb-4">読者の背中を押すあなたの熱い思い</h4>
          <p className="text-sm leading-relaxed mb-6">
            私は、数字や経営が苦手だった人間こそ、AIの力を借りて「本来の強さ」を発揮できると信じています。
            「これでいいのかな…」と迷い続けていたら、時間もチャンスもどんどん逃げてしまいます。
            たった1時間、あなたの次の一歩を変えませんか？
            ご参加をお待ちしています。
          </p>
          
          <p className="text-center text-lg font-semibold text-white mb-6">
            「いつか」ではなく、「今」変わりたいなら、この講座へ。
          </p>
          
          <Link 
            href="https://ai-na.co.jp/events/reserve.php?event_id=267&aff=af93b18ab8"
            target="_blank"
            rel="noopener noreferrer"
            className="!rounded-button w-full bg-white text-blue-600 font-bold py-4 shadow-lg transform transition-all duration-200 hover:scale-105 inline-flex items-center justify-center"
          >
            <div className="flex items-center space-x-2">
              <i className="ri-mail-line"></i>
              <span>講座に参加する</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer Profile */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-md mx-auto">
          <h4 className="font-bold text-center mb-4 text-gray-800">第三者視点の自己紹介</h4>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-start space-x-4 mb-4">
              <img 
                src="https://static.readdy.ai/image/bce5de027600eedc196e47923296cb7d/08d0fe413bf94f390a64e176859b66b6.jfif"
                alt="中原麻夏プロフィール写真"
                className="w-16 h-16 rounded-lg object-cover shadow-md flex-shrink-0"
              />
              <div className="flex-1">
                <h5 className="font-semibold text-gray-800 mb-1">中原麻夏</h5>
                <p className="text-xs text-gray-500 mb-2">起業家・マーケティングコンサルタント</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              中原麻夏は、エンジニア出身というロジカルな視点と、現場に根差したマーケティング実践を融合させた講師です。
              契約率・継続率改善の専門家として、小さな会社の経営者に寄り添いながらも、結果にこだわる姿勢に多くの支持が寄せられています。
              経営するプログラミング教室は、全国4位の生徒数を達成し、最優秀講師賞を受賞。現在はAI活用支援にも力を入れている実力派。
            </p>
          </div>
        </div>
      </div>

      <div className="h-8"></div>
    </div>
  );
}
