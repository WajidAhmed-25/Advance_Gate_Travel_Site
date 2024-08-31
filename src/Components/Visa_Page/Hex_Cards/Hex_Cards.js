import './hex.css';

// export default function Hex_Cards(){

//     const images = [
 
//         'https://picsum.photos/id/1040/300/300',
//         '',
//         'https://picsum.photos/id/136/300/300',
//         'https://picsum.photos/id/1039/300/300',
//         'https://picsum.photos/id/110/300/300',
//         'https://picsum.photos/id/1047/300/300',
//         'https://picsum.photos/id/1057/300/300',
//         'https://picsum.photos/id/1040/300/300',
//         'https://picsum.photos/id/106/300/300',
//         'https://picsum.photos/id/136/300/300',
//         'https://picsum.photos/id/1039/300/300',
//         'https://picsum.photos/id/110/300/300',
//         'https://picsum.photos/id/1047/300/300',
//         'https://picsum.photos/id/1057/300/300',
//         'https://picsum.photos/id/1057/300/300',
//         'https://picsum.photos/id/1057/300/300',
//         'https://picsum.photos/id/1057/300/300',
//       ];




//     return (
//         <div className="flex flex-wrap justify-center mb-64">
//             <div className="hex-grid">
//                 <div className="hex-row">
//                     {images.slice(0, 4).map((image, index) => (
//                         <div key={index} className="hex">
//                             <div className="hex-in">
                                
                               
// <div
//     className="relative transition duration-300 ease-in-out cursor-pointer hex-bg grayscale hover:grayscale-0"
//     style={{ backgroundImage: `url(${image})` }}
// >
//     <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white underline transition duration-300 ease-in-out opacity-0 hover:opacity-100">
//         Australia
//     </div>
// </div>


//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="hex-row">
//                     {images.slice(4, 9).map((image, index) => (
//                         <div key={index} className="hex">
//                             <div className="hex-in">
//                             <div
//     className="relative transition duration-300 ease-in-out cursor-pointer hex-bg grayscale hover:grayscale-0"
//     style={{ backgroundImage: `url(${image})` }}
// >
//     <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white underline transition duration-300 ease-in-out opacity-0 hover:opacity-100">
//         Australia
//     </div>
// </div>

//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="hex-row">
//                     {images.slice(9, 13).map((image, index) => (
//                         <div key={index} className="hex">
//                             <div className="hex-in">
//                             <div
//     className="relative transition duration-300 ease-in-out cursor-pointer hex-bg grayscale hover:grayscale-0"
//     style={{ backgroundImage: `url(${image})` }}
// >
//     <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white underline transition duration-300 ease-in-out opacity-0 hover:opacity-100">
//         Australia
//     </div>
// </div>

//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );


// }





import './hex.css';

export default function Hex_Cards() {
    const cards = [
        { image: 'https://tse2.mm.bing.net/th?id=OIP.SSlQmNy6Hp3dRwd3b15ASAAAAA&pid=Api&P=0&h=220', name: 'Australia' },
        { image: 'https://tse1.mm.bing.net/th?id=OIP.yHMrNImXtiuCn7jod9cJjgHaFk&pid=Api&P=0&h=220', name: 'Brazil' },
        { image: 'https://tse4.mm.bing.net/th?id=OIP.7ahTLhKHkeH-lKuQyynXzwHaEi&pid=Api&P=0&h=220', name: 'Canada' },
        { image: 'https://tse4.mm.bing.net/th?id=OIP.IXeMFlE1tMbqJeYPLgmdVQHaFj&pid=Api&P=0&h=220', name: 'Denmark' },
        { image: 'https://tse4.mm.bing.net/th?id=OIP.Aek8nylf3f_86XD0XoNVswHaE8&pid=Api&P=0&h=220', name: 'Egypt' },
        { image: 'https://tse1.mm.bing.net/th?id=OIP.hGZpiUclt8coc2rTbexEOwHaFj&pid=Api&P=0&h=220', name: 'France' },
        { image: 'https://tse4.mm.bing.net/th?id=OIP.S9T_bvJuZRdN_8-PQSsWogHaE7&pid=Api&P=0&h=220', name: 'Germany' },
        { image: 'https://tse4.mm.bing.net/th?id=OIP.dOnPPG2QVHadeR55NQBf8gHaE6&pid=Api&P=0&h=220', name: 'India' },
        { image: 'https://tse3.mm.bing.net/th?id=OIP.Gclw3e0lP15QOCHuJZv7OQHaE8&pid=Api&P=0&h=220', name: 'Japan' },
        { image: 'https://tse1.mm.bing.net/th?id=OIP.tNTO8eQP7lL4O7GLVjy8ygHaFA&pid=Api&P=0&h=220', name: 'Kenya' },
        { image: 'https://tse2.mm.bing.net/th?id=OIP.pk6AE2qkNoQTxz9eJkMK0QAAAA&pid=Api&P=0&h=220', name: 'Mexico' },
        { image: 'https://tse4.mm.bing.net/th?id=OIP.JN4d63dWA94RyygFrvfh6AHaE7&pid=Api&P=0&h=220', name: 'Norway' },
        { image: 'https://tse1.mm.bing.net/th?id=OIP.FREYiGr7b9xIugK_H3c91gHaFG&pid=Api&P=0&h=220', name: 'Russia' },
        { image: 'https://tse3.mm.bing.net/th?id=OIP.dAwzhzqtbaSExZuea05SlQHaFS&pid=Api&P=0&h=220', name: 'Spain' },
        { image: 'https://tse3.mm.bing.net/th?id=OIP.a1pWiKtZkzibHXbr50pXKgHaEx&pid=Api&P=0&h=220', name: 'Turkey' },
        { image: 'https://tse2.mm.bing.net/th?id=OIP.aqXrnWXh3IZI7ode4D_p1QHaE7&pid=Api&P=0&h=220', name: 'United Kingdom' },
        { image: 'https://tse2.mm.bing.net/th?id=OIP.XvLBG_j6JKVoq0fY_ONNvwAAAA&pid=Api&P=0&h=220', name: 'United States' },
    ];

    return (

<>

<div className="mt-20 text-center">
<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore the True Beauty of the World</h2>
<div class="w-[480px] h-1 mx-auto mt-4 mb-4 bg-blue-600/70"></div>
<p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
   Top Tourist Destinations On Finger Tips
</p>
</div>

        
        <div className="flex flex-wrap justify-center mb-40">
            <div className="hex-grid">
                <div className="hex-row">
                    {cards.slice(0, 4).map((card, index) => (
                        <div key={index} className="hex">
                            <div className="hex-in">
                                <div
                                    className="relative transition duration-300 ease-in-out cursor-pointer hex-bg brightness-[70%] hover:brightness-100"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white underline transition duration-300 ease-in-out opacity-0 hover:opacity-100">
                                        {card.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hex-row">
                    {cards.slice(4, 9).map((card, index) => (
                        <div key={index} className="hex">
                            <div className="hex-in">
                                <div
                                    className="relative transition duration-300 ease-in-out cursor-pointer hex-bg brightness-[70%] hover:brightness-100"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white underline transition duration-300 ease-in-out opacity-0 hover:opacity-100">
                                        {card.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hex-row">
                    {cards.slice(9, 13).map((card, index) => (
                        <div key={index} className="hex">
                            <div className="hex-in">
                                <div
                                    className="relative transition duration-300 ease-in-out cursor-pointer hex-bg brightness-[70%] hover:brightness-100"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white underline transition duration-300 ease-in-out opacity-0 hover:opacity-100">
                                        {card.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


        </>
    );
}



