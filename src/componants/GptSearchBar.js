import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";

const GptSearchBar=()=>{
    const languagekey=useSelector(store=>store.config.lang);
    console.log(languagekey);
    return (
        <div className="pt-[15%] flex justify-center" >
            <form className="w-1/2 bg-black grid grid-cols-12">
                <input className="p-4 m-4 col-span-9" type="text" placeholder={lang[languagekey].searchPlaceholder} />
                <button className="bg-red-700 m-4 py-2 px-4 rounded-md text-white col-span-3">{lang[languagekey].search}</button>
            </form>
        </div>
    )
}
export default GptSearchBar;