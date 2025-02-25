import React, { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, query, where, orderBy } from 'firebase/firestore';
import { auth, db } from '../Components/Firebase';

const History = () => {
    const [userName, setUserName] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (!user) return;

            try {
                // Fetch User Name
                const userDocRef = doc(db, 'users', user.uid);
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists()) {
                    setUserName(userDocSnap.data().firstName);
                }

                // Fetch Search History
                const historyRef = collection(db, 'user_history');
                const q = query(
                    historyRef,
                    where("userId", "==", user.uid),
                );
                const querySnapshot = await getDocs(q);

                const historyData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setSearchHistory(historyData);
            } catch (error) {
                console.error("Error fetching history:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <>
            <div className="w-full h-screen bg-[#2a8a83] md:p-5 p-2 flex items-center justify-center">
                <div className="max-w-7xl w-full mx-auto md:px-8 px-4 md:py-6 py-4 min-h-[90vh] rounded-lg bg-white">
                    <div className="flex items-center justify-between text-zinc-700">
                        <h2 className='text-3xl font-semibold'>
                            {userName ? userName : "Loading..."}
                        </h2>
                        <Link to={"/map"}>
                            <AiFillHome className='text-2xl cursor-pointer transition-all duration-500 hover:text-black' />
                        </Link>
                    </div>
                    <h2 className='text-zinc-400 mt-7'>Recent Searches</h2>
                    <div className="border mt-1 rounded-lg p-2 border-gray-200 flex flex-col gap-3 h-[71vh] overflow-y-auto">
                        {searchHistory.length > 0 ? (
                            searchHistory.map((history) => (
                                <div key={history.id} className="border-b flex items-center text-zinc-700 p-3 justify-center md:flex-row flex-col border-gray-200">
                                    <p className='md:max-w-[50%] w-full'>
                                        <span className='font-medium text-zinc-800'>Start here :</span> {history.origin}
                                    </p>
                                    <p className='md:max-w-[50%] w-full'>
                                        <span className='font-medium text-zinc-800'>Destination :</span> {history.destination}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-zinc-500 text-center mt-4">No search history available.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default History;
