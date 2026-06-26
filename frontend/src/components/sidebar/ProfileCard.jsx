import { useEffect } from "react";
import { useSelector } from "react-redux";
const ProfileCard = () => {


    const user={
        username:"John Doe",
        email:"[EMAIL_ADDRESS]",
        category:"Senior Trader",
        avatar:"https://ui-avatars.com/api/?name=John+Doe&background=random"
    }
    

     
    // useEffect(()=>{
    //      setImage(user?.avatar);
    //      setName(user?.username);
    //      setCatagory(user?.category);
    // },[user])

    return (
        <div className="bg-white dark:bg-[#1e1e2d] border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm flex flex-col items-center p-4 transition-colors duration-200">
            
            <img 
                src={user.avatar ? user.avatar : "https://ui-avatars.com/api/?name=John+Doe&background=random" } 
                alt="Profile" 
                className="w-16 h-16 rounded-full object-cover mb-3"
            />
            
            <h2 className="text-gray-900 dark:text-gray-100 font-semibold text-base mb-1">
               {user.username?user.username:"John Doe"}
            </h2>
            
            <span className="text-gray-500 dark:text-gray-400 text-xs mb-3">
                {user.category?user.category:"Senior Trader"}
            </span>
            
            <p className="text-gray-500 dark:text-gray-400 text-xs text-center leading-relaxed">
                Passionate about algorithmic trading, value investing, and building scalable financial systems.
            </p>

        </div>
    );
};

export default ProfileCard;
