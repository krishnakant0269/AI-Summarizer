/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/summarize";
import { useGetKeywordsMutation } from "../services/keywords";
import { useGetTranslateMutation } from "../services/translator";

const Demo = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [allArticles, setAllArticles] = useState([]);
  const [showKeywords, setShowKeywords] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [hindi, setHindi] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [translatedText, setTranslatedText] = useState("");

  const [getSummary, { error: summaryError, isFetching: isFetchingSummary }] = useLazyGetSummaryQuery();
  const [extractKeywords, { error: keywordsError, isFetching: isFetchingKeywords }] = useGetKeywordsMutation();
  const [getTranslate, { error: translateError, isFetching: isFetchingTranslate }] = useGetTranslateMutation();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem("articles"));
    if (articlesFromLocalStorage) setAllArticles(articlesFromLocalStorage);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fetch summary
    const { data: summaryData } = await getSummary({ articleUrl: article.url });
    if (summaryData?.summary) {
      const newArticle = { ...article, summary: summaryData.summary };
      setArticle(newArticle);

      // Store the article in history
      const updatedArticles = [newArticle, ...allArticles];
      setAllArticles(updatedArticles);
      localStorage.setItem("articles", JSON.stringify(updatedArticles));

      // Extract keywords 
      const { data: keywordsData } = await extractKeywords({ text: summaryData.summary });
      if (keywordsData?.keywords) {
        setKeywords(keywordsData.keywords);
      }

      // Translate summary
      const { data: translationData } = await getTranslate({ text: summaryData.summary, target: "hi", source: "en"});
      console.log(translationData);
      if (translationData?.translations.translation) {
        setTranslatedText(translationData.translations.translation);
      }
    }
  };

  return (
    <section className="mt-3">
      {/* Search Form */}
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex justify-center items-center">
          <form
            className="relative flex flex-col justify-center items-center lg:flex-row lg:w-[600px] lg:items-center"
            onSubmit={handleSubmit}
          >
            <img src={linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5" />
            <input
              type="url"
              placeholder="Enter a URL"
              value={article.url}
              onChange={(e) => setArticle({ ...article, url: e.target.value })}
              required
              className="url_input peer"
            />
            <button type="submit" className="submit_btn peer-focus:border-gray-950 peer-focus:text-gray-700">
              ↵
            </button>
          </form>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="text-white ml-4 font-santoshi pr-1 pl-1 font-semibold rounded-[5px] text-[14px] bg-black h-6 w-16 hover:bg-gray-600 shadow-md"
          >
            History
          </button>
          <button
            onClick={() => setShowKeywords(!showKeywords)}
            className="ml-5 text-[14px] h-6 bg-gray-400 pr-1 pl-1 rounded-sm shadow-md font-santoshi font-semibold hover:bg-slate-700 hover:text-white"
          >
            Keywords
          </button>
        </div>
        <div className="font-santoshi flex flex-wrap font-bold text-[14px] mt-3 ml-[-150px] text-gray-600">
          <span className="mr-2">Translate to Hindi (हिंदी में अनुवाद के लिए यहाँ क्लिक करें)</span>
          <button onClick={() => setHindi(!hindi)} className="text-blue-500"> click here</button>
        </div>

        {/* Browse history */}
        {showHistory && (
          <div className="flex flex-col w-[600px] gap-1 max-h-40 ml-[-170px] overflow-y-auto">
            {allArticles.slice(0, 10).map((item, index) => (
              <div key={`link-${index}`} onClick={() => setArticle(item)} className="link_card">
                <div className="copt_btn">
                  <img src={copy} alt="copy" className="w-[15px] h-[15px] object-contain" />
                </div>
                <p className="flex-1 font-santoshi text-blue-700 font-medium text-sm truncate">{item.url}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap w-full lg:w-3xl flex-row">
        <div>
          {/* Summary */}
          <div className="my-10 w-full lg:w-[600px] flex justify-center items-center">
            {isFetchingSummary ? (
              <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
            ) : summaryError ? (
              <p className="font-inter font-bold text-black text-center">
                That was not supposed to happen...
                <br />
                <span className="font-santoshi font-normal text-gray-700">{summaryError?.data?.error}</span>
              </p>
            ) : (
              article.summary && (
                <div className="flex flex-col gap-3">
                  <h2>Article <span className="blue_gradient">Summary</span></h2>
                  <div className="summary_box">
                    <p className="font-inter font-medium text-sm text-gray-700">
                      {hindi ? translatedText : article.summary}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex w-full lg:w-[400px] ml-2">
          <div className="my-10 max-w-full flex justify-center">
            {isFetchingKeywords ? (
               <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
            ) : keywordsError ? (
              <p className="font-inter font-bold text-black text-center">
                That was not supposed to happen...
                <br />
                <span className="font-santoshi font-normal text-gray-700">{keywordsError?.data?.error}</span>
              </p>
            ) : (
              showKeywords && (
                <div className="flex flex-col gap-3 w-full lg:w-60 mr-3">
                  <h2><span className="blue_gradient">Keywords</span></h2>
                  <div className="summary_box">
                    <div className="font-inter font-medium text-sm text-gray-700">
                    <ul>
                        {keywords.map((keyword, index) => (
                          <li key={index}>• {keyword.word}</li>
                        ))}
                    </ul>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
