// Common Utils
import Data from './../data/user.json';
export const getCurrentUser = (userId) => {
return Data.users.find((item) => item.id === +userId) || null;
}

export const getPageName = (location) => location.pathname.split("/").reverse()[0] || "profile";