import React from 'react';
import './PalaceList.css';
import changduk from './img/changduk.jpg';
import kyungbokgung from './img/kyungbokgung.jpg';
import ducksugung from './img/ducksugung.jpg';
import changkyunggung from './img/changkyunggung.jpg';
import Gyeonghuigung from './img/Gyeonghuigung.jpg';
import unhyeongung from './img/unhyeongung.jpg';
 
 
function PalaceList() {
  return (
<div className="wrapper">
  <div className="title-PalaceList">
    <header className="major" id="PalaceList" >
        <h2>Let's take a trip Korean palace</h2>
        <p>Korean palace list for Travel</p>
    </header>
  </div>
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <div className="card">
                    <img src={kyungbokgung} className="figure-img img-fluid rounded" alt="changduk-img"/>   
                    {/*list 1*/}
                    <div className="card-body">
                        <h5 className="card-title">Gyeongbokgung Palace</h5><br/>
                        <p className="card-text">
                        <i className="fas fa-map-marker-alt"/> Address<br/> 161, Sajik-ro, Jongno-gu, Seoul <br/><br/>
                        <i className="fas fa-home"/> Type<br/> Palaces/ Fortresses/ Gates <br/><br/>
                        <i className="fas fa-phone"/>  For more info<br/> <a href="www.royalpalace.go.kr">www.royalpalace.go.kr</a> <br/>
                        </p>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        More information
                        </button>
                            {/*Modal start*/}
                            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="list1" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="list1">Gyeongbokgung Palace</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-6"><img src={kyungbokgung} className="figure-img img-fluid rounded" alt="kyungbokgung-img"/>
                                                    <div id="googleMap"></div>
                                                </div>            
                                                <div className="col-6">
                                                    <div className="modal-body-title"><h3>The history of Gyeongbokgung Palace</h3></div>
                                                    <p>
                                                    Built in 1395, Gyeongbokgung Palace is also commonly referred to as the Northern Palace because its location is furthest north when compared to the neighboring palaces of Changdeokgung (Eastern Palace) and Gyeonghuigung (Western Palace) Palace. 
                                                    <br/><br/>
                                                    Gyeongbokgung Palace is arguably the most beautiful, and remains the largest of all five palaces.

                                                    The premises were once destroyed by fire during the Imjin War (Japanese Invasions, 1592-1598). However, all of the palace buildings were later restored under the leadership of Heungseondaewongun during the reign of King Gojong (1852-1919).
                                                    <br/><br/>
                                                    Remarkably, the most representative edifices of the Joseon Dynasty, Gyeonghoeru Pavilion and Hyangwonjeong Pond have remained relatively intact. Woldae and the sculptures of Geunjeongjeon (The Royal Audience Chamber) represent past sculptures of contemporary art.

                                                    The National Palace Museum of Korea is located south of Heungnyemun Gate, and the National Folk Museum is located on the eastern side within Hyangwonjeong.
                                                    
                                                    <br/><br/>
                                                    The National Palace Museum of Korea is located south of Heungnyemun Gate, and the National Folk Museum is located on the eastern side within Hyangwonjeong.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/*Modal end*/}
                    </div>
                </div>
            </div>
            {/*list 2*/}
            <div className="col-sm">
            <div className="card">
                <img src={changduk} className="figure-img img-fluid rounded" alt="changduk-img"/>
                    <div className="card-body">
                        <h5 className="card-title">Changdeokgung Palace</h5><br/>
                        <p className="card-text">
                            <i className="fas fa-map-marker-alt"/> Address<br/> 99, Yulgok-ro, Jongno-gu, Seoul <br/><br/>
                            <i className="fas fa-home"/> Type<br/> Palaces/ Fortresses/ Gates <br/><br/>
                            <i className="fas fa-phone"/> For more info<br/> <a href="www.cdg.go.kr">www.cdg.go.kr</a> <br/>
                        </p>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#list2">
                        More information
                        </button>
                            {/*Modal start*/}
                            <div className="modal fade" id="list2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Changdeokgung Palace</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="container">
                                                <div className="row">
                                                    <div className="col-6"><img src={changduk} className="figure-img img-fluid rounded" alt="changduk-img"/>
                                                    <div id="googleMap2"></div>
                                                    </div>            
                                                    <div className="col-6">
                                                    <div className="modal-body-title"><h3>The history of Changdeokgung Palace</h3></div>
                                                        <p>
                                                        Changdeokgung Palace was the second royal villa built following the construction of Gyeongbukgung Palace in 1405. It was the principal palace for many kings of the Joseon dynasty, and is the most well-preserved of the five remaining royal Joseon palaces. The palace grounds are comprised of a public palace area, a royal family residence building, and the rear garden. Known as a place of rest for the kings, the rear garden boasts a gigantic tree that is over 300 years old, a small pond and a pavilion.
                                                        <br/><br/>
                                                        The palace gained importance starting from the time of Seongjong, the 9th king of Joseon, when a number of kings began using it as a place of residence. Unfortunately, the palace was burned down by angry citizens in 1592 when the royal family fled their abode during the Japanese invasion of Korea. Thanks to Gwanghaegun, the palace was restored in 1611. Even today, it houses a number of cultural treasures, such as Injeongjeon Hall, Daejojeon Hall, Seonjeongjeon Hall, and Nakseonjae.

                                                        Changdeokgung Palace’s rear garden was constructed during the reign of King Taejong and served as a resting place for the royal family members. The garden had formerly been called Bukwon and Geumwon, but was renamed Biwon after King Kojong came into power. 
                                                        <br/><br/>
                                                        The garden was kept as natural as possible and was touched by human hands only when absolutely necessary. Buyongjeong, Buyongji, Juhabru, Eosumun, Yeonghwadang, Bullomun, Aeryeonjeong, and Yeongyeongdang are some of the many pavilions and fountains that occupy the garden. The most beautiful time to see the garden is during the fall when the autumn foliage is at its peak and the leaves have just started to fall.

                                                        Though it has been treasured by Koreans for centuries, Changdeokgung Palace was recognized as a World Cultural Heritage site by the UNESCO World Cultural Heritage Committee in December of 1997 during the committee meeting in Naples, Italy.

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/*Modal end*/}
                    </div>
                </div>
            </div>
            {/*list 3*/}
            <div className="col-sm">
            <div className="card">
                <img src={ducksugung} className="figure-img img-fluid rounded" alt="changduk-img"/>
                    <div className="card-body">
                        <h5 className="card-title">Deoksugung Palace</h5><br/>
                        <p className="card-text">
                            <i className="fas fa-map-marker-alt"/> Address<br/> 99,Sejong-daero, Jung-gu,Seoul <br/><br/>
                            <i className="fas fa-home"/> Type<br/> Palaces/ Fortresses/ Gates <br/><br/>
                            <i className="fas fa-phone"/> For more info<br/> <a href="www.deoksugung.go.kr">www.deoksugung.go.kr</a> <br/>
                        </p>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#list3">
                        More information
                        </button>
                            {/*Modal start*/}
                            <div className="modal fade" id="list3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Deoksugung Palace</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6"><img src={ducksugung} className="figure-img img-fluid rounded" alt="ducksugung-img"/>
                                                <div id="googleMap3"></div>
                                            </div>            
                                            <div className="col-6">
                                                <div className="modal-body-title"><h3>The history of Deoksugung Palace</h3></div>
                                                <p>
                                                During the latter half of the Joseon period, Gyeonghuigung Palace served as the secondary palace for the king. Situated on the west side of Seoul, it was also called Seogwol, meaning "a palace of the west." The secondary palace was where the king moved to in times of emergency.
                                                <br/><br/>
                                                From In-Jo to Cheol-Jong, about ten kings from the Joseon Dynasty stayed here at Gyeonghuigung. This palace was built using the slanted geography of the surrounding mountain, and it boasts traditional beauty in its architecture and huge historical significance. For a time, it was of a considerable size, even to the point of having an arched bridge connecting it to Deoksugung Palace. For the king’s royal audience, there was Sungjeongjeon and Jajeongjeon buildings, and for sleeping quarters, Yungbokjeon and Hoesangjeon buildings.
                                                <br/><br/>
                                                Altogether there were about 100 small and large buildings on the palace grounds. But when Japan began occupation of Korea in 1908, the Japanese school, Gyeongseong Middle School moved into the palace, and as a result, much of the palace became leveled or moved. Currently, Gyeonghuigung’s front gate, Heunghwamun, is being used as the front gate for Shilla Hotel’s main entrance, and Sungjeongjeon is at Dongguk University. The school moved out to a different area, and the Sungjeongjeon and some of the other buildings have been reconstructed.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/*Modal end*/}
                    </div>
                </div>
            </div>
        </div>
        {/*row 1*/}
        {/*list 4*/}
        <div className="row">
            <div className="col-sm">
                <div className="card">
                <img src={changkyunggung} className="figure-img img-fluid rounded" alt="changkyunggung-img"/>
                    <div className="card-body">
                        <h5 className="card-title">Changgyeonggung Palace</h5>
                        <p className="card-text">
                            <i className="fas fa-map-marker-alt"/> Address<br/>185,Changgyeonggung-ro,Jongno-gu,Seoul<br/><br/>
                            <i className="fas fa-home"/> Type<br/> Palaces/ Fortresses/ Gates <br/><br/>
                            <i className="fas fa-phone"/> For more info <br/> <a href="www.deoksugung.go.kr">www.deoksugung.go.kr</a> <br/>
                        </p>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#list4">
                        More information
                        </button>
                            {/*Modal start*/}
                            <div className="modal fade" id="list4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Changgyeonggung Palace</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6"><img src={changkyunggung} className="figure-img img-fluid rounded" alt="changduk-img"/>
                                                <div id="googleMap4"></div>
                                            </div>            
                                            <div className="col-6">
                                                <div className="modal-body-title"><h3>The history of Changgyeonggung Palace</h3></div>
                                                <p>
                                                Located in the heart of Seoul, Changgyeonggung Palace was originally built as Suganggung Palace by the 4th ruler of the Joseon dynasty, King Sejong (r.1418-1450), for his retiring father, King Taejong. It often served as residential quarters for queens and concubines. 
                                                
                                                During the reign of King Seongjong (r.1469-1494), the palace was renovated and renamed to Changgyeonggung Palace. It later became a park with a zoo and a botanical garden during Japanese colonial rule. The palace grounds remained this way until 1983 when restoration of its old grace was completed.
                                                <br/><br/>
                                                Past the main entrance of Changgyeonggung Palace, Honghwa Gate, you will find Okcheongyo Bridge. All palaces of the Joseon dynasty have ponds with an arch bridge over them, just like Okcheongyo Bridge. Cross Okcheongyo Bridge, pass the Myeongjeongmun Gate, and you will find Myeonjeongjeon. 
                                                
                                                This is the office of the king, and Myeongjeongjeon is the oldest of the Joseon dynasty palaces. The houses face southwards, but Myeongjeongjeon faces east. Because the ancestral shrine of the royal family is located to the south, the gate couldn't face the south, as is required by Confucian custom. There are stones with the status of the officials carved on the yard. 
                                                
                                                Behind Myeongjeongjeon on the upper left side is Sungmundang. This building utilizes the slope of the mountain. If you look at Myeongjeongjeon and Munjeongjeon, the combination of the high and low roofs offers a beautiful view.
                                                <br/><br/>
                                                Tongmyeongjeon was built for the queen. It is the biggest building in Changgyeonggung Palace, and you can recognize the delicate details of its structure in various parts of the building. Walk up the stones past Tongmyeongjeon and there you will find Jagyeongjeon.
                                                
                                                 On the southeast direction of the Jagyeongjeon is the Punggidae. This Punggidae is a measuring instrument. It is a long pole with a cloth hung at the end used to check the speed and direction of the wind. If you head north there is a large pond called Chundangji. Half of the pond was originally a rice field that the king took care of. But during the Japanese occupation, the rice field was changed to a pond with little ships floating on it. And the botanic garden built above the pond still remains today.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/*Modal end*/}
                    </div>
                </div>
            </div>
            {/*list 5*/}
            <div className="col-sm">
                <div className="card">
                    <img src={Gyeonghuigung} className="figure-img img-fluid rounded" alt="Gyeonghuigung-img"/>
                    <div className="card-body">
                        <h5 className="card-title">Gyeonghuigung Palace</h5>
                        <p className="card-text">
                            <i className="fas fa-map-marker-alt"/> Address<br/>55, Saemunan-ro, Jongno-gu, Seoul <br/><br/>
                            <i className="fas fa-home"/> Type<br/> Palaces/ Fortresses/ Gates <br/><br/>
                            <i className="fas fa-phone"/> For more info <br/><a href="www.cgcm.go.kr">www.cgcm.go.kr</a> <br/>
                        </p>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#list5">
                        More information
                        </button>
                            {/*Modal start*/}
                            <div className="modal fade" id="list5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Gyeonghuigung Palace</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-6"><img src={Gyeonghuigung} className="figure-img img-fluid rounded" alt="changduk-img"/>
                                                    <div id="googleMap5"></div>
                                                </div>            
                                                <div className="col-6">
                                                    <div className="modal-body-title"><h3>The history of Gyeonghuigung Palace</h3></div>
                                                    <p>
                                                    Changdeokgung Palace was the second royal villa built following the construction of Gyeongbukgung Palace in 1405. It was the principal palace for many kings of the Joseon dynasty, and is the most well-preserved of the five remaining royal Joseon palaces. The palace grounds are comprised of a public palace area, a royal family residence building, and the rear garden. Known as a place of rest for the kings, the rear garden boasts a gigantic tree that is over 300 years old, a small pond and a pavilion.
                                                    <br/><br/>
                                                    The palace gained importance starting from the time of Seongjong, the 9th king of Joseon, when a number of kings began using it as a place of residence. Unfortunately, the palace was burned down by angry citizens in 1592 when the royal family fled their abode during the Japanese invasion of Korea. Thanks to Gwanghaegun, the palace was restored in 1611. Even today, it houses a number of cultural treasures, such as Injeongjeon Hall, Daejojeon Hall, Seonjeongjeon Hall, and Nakseonjae.

                                                    Changdeokgung Palace’s rear garden was constructed during the reign of King Taejong and served as a resting place for the royal family members. The garden had formerly been called Bukwon and Geumwon, but was renamed Biwon after King Kojong came into power. 
                                                    <br/><br/>
                                                    The garden was kept as natural as possible and was touched by human hands only when absolutely necessary. Buyongjeong, Buyongji, Juhabru, Eosumun, Yeonghwadang, Bullomun, Aeryeonjeong, and Yeongyeongdang are some of the many pavilions and fountains that occupy the garden. The most beautiful time to see the garden is during the fall when the autumn foliage is at its peak and the leaves have just started to fall.

                                                    Though it has been treasured by Koreans for centuries, Changdeokgung Palace was recognized as a World Cultural Heritage site by the UNESCO World Cultural Heritage Committee in December of 1997 during the committee meeting in Naples, Italy.
                                                   
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/*Modal end*/}
                    </div>
                </div>
            </div>
            {/*list 6*/}
            <div className="col-sm">
            <div className="card">
                <img src={unhyeongung} className="figure-img img-fluid rounded" alt="unhyeongung-img"/>
                    <div className="card-body">
                        <h5 className="card-title">Unhyeongung Royal Residence </h5>
                        <p className="card-text">
                            <i className="fas fa-map-marker-alt"/> Address<br/>464,Samil-daero,Jongno-gu,Seoul<br/><br/>
                            <i className="fas fa-home"/> Type<br/> Palaces/ Fortresses/ Gates <br/><br/>
                            <i className="fas fa-phone"/> For more info <br/><a href="www.unhyeongung.or.kr">www.unhyeongung.or.kr</a> <br/>
                        </p>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#list6">
                        More information
                        </button>
                            {/*Modal start*/}
                            <div className="modal fade" id="list6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Unhyeongung Royal Residence</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-6"><img src={unhyeongung} className="figure-img img-fluid rounded" alt="unhyeongung-img"/>
                                                    <div id="googleMap6"></div>
                                                </div>            
                                                <div className="col-6">
                                                    <div className="modal-body-title"><h3>The history of Unhyeongung Royal Residence</h3></div>
                                                    <p>
                                                    Changdeokgung Palace was the second royal villa built following the construction of Gyeongbukgung Palace in 1405. It was the principal palace for many kings of the Joseon dynasty, and is the most well-preserved of the five remaining royal Joseon palaces. The palace grounds are comprised of a public palace area, a royal family residence building, and the rear garden. Known as a place of rest for the kings, the rear garden boasts a gigantic tree that is over 300 years old, a small pond and a pavilion.
                                                    <br/><br/>
                                                    The palace gained importance starting from the time of Seongjong, the 9th king of Joseon, when a number of kings began using it as a place of residence. Unfortunately, the palace was burned down by angry citizens in 1592 when the royal family fled their abode during the Japanese invasion of Korea. Thanks to Gwanghaegun, the palace was restored in 1611. Even today, it houses a number of cultural treasures, such as Injeongjeon Hall, Daejojeon Hall, Seonjeongjeon Hall, and Nakseonjae.

                                                    Changdeokgung Palace’s rear garden was constructed during the reign of King Taejong and served as a resting place for the royal family members. The garden had formerly been called Bukwon and Geumwon, but was renamed Biwon after King Kojong came into power. 
                                                    <br/><br/>
                                                    The garden was kept as natural as possible and was touched by human hands only when absolutely necessary. Buyongjeong, Buyongji, Juhabru, Eosumun, Yeonghwadang, Bullomun, Aeryeonjeong, and Yeongyeongdang are some of the many pavilions and fountains that occupy the garden. The most beautiful time to see the garden is during the fall when the autumn foliage is at its peak and the leaves have just started to fall.

                                                    Though it has been treasured by Koreans for centuries, Changdeokgung Palace was recognized as a World Cultural Heritage site by the UNESCO World Cultural Heritage Committee in December of 1997 during the committee meeting in Naples, Italy.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/*Modal end*/}
                    </div>
                </div>
            </div>
        </div>
        {/*row2 */}
    </div>
  
    <div className="row ">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
            <div className="tiny-footer">
                <p>Copyright © All Rights Reserved 2020 </p>
            </div>
        </div>
    </div>
</div>

  )
}
 
export default PalaceList;
 

