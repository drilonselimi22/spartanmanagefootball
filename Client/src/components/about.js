import React from 'react';
import stadiumimage from '../images/stadium.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
function About() {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${stadiumimage})`,
                height: '40vh',
                objectFit: "cover"
            }}>
                <div style={{
                    position: "absolute",
                    top: '40%',
                    left: '48%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white'
                }}>
                    <h1><span className="text-warning">About</span></h1>
                </div>
            </div>

            <div className='w-75 justify-content-center align-items-center text-center' style={{
                margin: 'auto',
                marginTop: '50px'
            }}>

                <div>
                    <text> <b>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis iaculis neque, a molestie tortor sodales vitae. Nunc hendrerit nulla in mauris eleifend, condimentum lacinia velit porta. Maecenas imperdiet sapien in lacus pulvinar, sed pharetra urna sodales. Integer pretium scelerisque luctus. Fusce dolor urna, vestibulum ut turpis id, bibendum tincidunt turpis. Curabitur porttitor erat sed arcu elementum, a suscipit tortor euismod. Donec mauris magna, molestie ac magna quis, ullamcorper dignissim mauris. Morbi sit amet volutpat erat. Etiam rhoncus placerat ligula, ac fringilla mi porta in. Nullam facilisis sapien eu nunc posuere, ut elementum sem iaculis.

                        Curabitur leo erat, placerat sed quam nec, commodo varius orci. Donec fringilla commodo velit ut dignissim. Curabitur dapibus velit odio, quis vestibulum ex feugiat et. Proin id purus posuere, tempus elit in, volutpat velit. Aliquam ullamcorper vel nisl vel auctor. Sed id orci id orci placerat malesuada. Suspendisse potenti. Mauris id sodales magna. Vivamus hendrerit bibendum vestibulum. Donec eu vehicula dui. Vivamus vitae velit pretium, interdum turpis non, convallis ligula. Sed posuere lectus eget bibendum dictum.

                        Ut felis nulla, ultrices vitae urna eu, rutrum efficitur augue. Praesent dui sapien, porta eu laoreet id, molestie et urna. Integer vel augue et ipsum pellentesque tincidunt ut a odio. Aliquam congue ac nunc vitae commodo. Proin bibendum malesuada urna, ac dapibus sapien. Sed commodo urna a erat consequat pulvinar. In eu venenatis libero, vitae tempus nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at dui sed massa lacinia laoreet. Morbi fermentum mi odio, ac convallis ipsum faucibus imperdiet. Nam ligula augue, tincidunt at mollis ut, ultrices non nibh. Morbi quis augue quis odio iaculis consectetur.

                        Fusce elementum orci ac mauris bibendum, in scelerisque sem vestibulum. Vestibulum et magna venenatis, faucibus neque ultricies, ultrices erat. Integer blandit at orci nec imperdiet. Curabitur vulputate.
                       </b> </text>
                </div>
            </div>
            </div>
    );
        };
export default About;