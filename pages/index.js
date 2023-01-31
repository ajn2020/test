import React, { Component } from 'react'
import Head from "next/head"
import styles from "../styles/Home.module.css"
import Image from 'next/image'
import { MenuOutlined, CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons'
import { Carousel, Button, Collapse } from 'antd'

const { Panel } = Collapse

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      showWebsite: true,
      showOther: true,
      showNews: true
    }

    this.gotoNews = this.gotoNews.bind(this)
    this.showWebsiteFun = this.showWebsiteFun.bind(this)
    this.showOtherFun = this.showOtherFun.bind(this)
    this.showNewsFun = this.showNewsFun.bind(this)
  }
  showWebsiteFun(){
    this.setState({showWebsite: !this.state.showWebsite})
  }
  showOtherFun(){
    this.setState({showOther: !this.state.showOther})
  }
  showNewsFun(){
    this.setState({showNews: !this.state.showNews})
  }
  // Go to link
  gotoNews (url) {
    window.open(url)
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>HRH</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <div className={styles.top}>
            <div>
              <div className={styles.siteName}>Hounslow Recycling Website</div>
              <div className={styles.siteDescription}>enjoy..</div>
            </div>
            <div className={styles.topRight}>
              <div className={styles.searchContainer}>
                <input className={styles.searchInput} type="text" placeholder="input search text" />
                <Image className={styles.searchIcon} src="/search-icon.png" width={20} height={20} alt="icon"/>
              </div>
              <Button icon={<MenuOutlined />} />
            </div>
          </div>
          <div className={styles.columnTitle}>
            Upcoming events
          </div>
          <div className={styles.midContainer}>
            <div className={styles.slideContainer}>
              <Carousel autoplay>
                <div className={styles.slideContent} onClick={() => {gotoNews("https://www.google.com")}}>
                  <Image src="/news1.png" width={1000} height={350} alt="news picture"/>
                  <div className={styles.slideTitle}>G7: Agree to 'price cap' Russia warns: Cut supply from February 1st</div>
                </div>
                <div className={styles.slideContent} onClick={() => {gotoNews("https://www.google.com")}}>
                  <Image src="/news2.png" width={1000} height={350} alt="news picture"/>
                  <div className={styles.slideTitle}>Seize the long window</div>
                </div>
                <div className={styles.slideContent} onClick={() => {gotoNews("https://www.google.com")}}>
                  <Image src="/news3.png" width={1000} height={350} alt="news picture"/>
                  <div className={styles.slideTitle}>South Korean expert meeting condemns Japan for dumping pollution into Sea: Not 'dumping' but 'discarding'</div>
                </div>
              </Carousel>
            </div>
          </div>
          <div className={styles.midRightContents}>
              <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                <div className={styles.nDot}>.</div>
                <div className={styles.nText}>
                  NATO's top military officer says it is prepared for direct confrontation with Russia. Ukraine has requested long-range missiles
                </div>
              </div>
              <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                <div className={styles.nDot}>.</div>
                <div className={styles.nText}>
                  Protests continue in Peru after Congress rejected the president's proposal for early elections
                </div>
              </div>
              <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                <div className={styles.nDot}>.</div>
                <div className={styles.nText}>
                  Will the Ukrainian army use Western intelligence information to launch further decapitation operations?
                </div>
              </div>
              <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                <div className={styles.nDot}>.</div>
                <div className={styles.nText}>
                  Argentina's President: Latin American countries are not considering sending arms to Ukraine
                </div>
              </div>
              <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                <div className={styles.nDot}>.</div>
                <div className={styles.nText}>
                  The widespread use of police violence reflects the intensification of social conflicts in the United States
                </div>
              </div>
              <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                <div className={styles.nDot}>.</div>
                <div className={styles.nText}>
                  Bolsonaro's son says his father may not plan to return to Brazil
                </div>
              </div>
            </div>
          <div className={styles.columnTitleSearch}>
            <div className={styles.colTitleText}>
              <span className={styles.titleSpan}>I am trying to recycle: ... </span>
              {
                this.state.showWebsite?(
                  <Button onClick={this.showWebsiteFun} icon={<CaretDownOutlined  />} />
                ):(
                  <Button onClick={this.showWebsiteFun} icon={<CaretRightOutlined />}  />
                )
              }
            </div>
            <div className={styles.midSearchContainer}>
              <input className={styles.midSearchInput} type="text" placeholder="input search text" />
              <Image className={styles.midSearchIcon} src="/search-icon.png" width={20} height={20} alt="icon"/>
            </div>
          </div>
          {
            this.state.showWebsite?(
              <>
                <div className={styles.hotWebsites}>
                  <Image onClick={() => {gotoNews("https://www.google.com")}} className={styles.hSite}  src="/news-logo.jpg" width={160} height={160} alt="site"/>
                  <Image onClick={() => {gotoNews("https://www.google.com")}} className={styles.hSite} src="/news-logo.jpg" width={160} height={160} alt="site"/>
                  <Image onClick={() => {gotoNews("https://www.google.com")}} className={styles.hSite} src="/news-logo.jpg" width={160} height={160} alt="site"/>
                  <Image onClick={() => {gotoNews("https://www.google.com")}} className={styles.hSite} src="/news-logo.jpg" width={160} height={160} alt="site"/>
                  <Image onClick={() => {gotoNews("https://www.google.com")}} className={styles.hSite} src="/news-logo.jpg" width={160} height={160} alt="site"/>
                </div>
                <div className={styles.hotWebsites}>
                  <Image onClick={() => {gotoNews("https://www.google.com")}} className={styles.hSite}  src="/news-logo.jpg" width={160} height={160} alt="site"/>
                  <Image onClick={() => {gotoNews("https://www.google.com")}} className={styles.hSite} src="/news-logo.jpg" width={160} height={160} alt="site"/>
                  <Image onClick={() => {gotoNews("https://www.google.com")}} className={styles.hSite} src="/news-logo.jpg" width={160} height={160} alt="site"/>
                  <Image onClick={() => {gotoNews("https://www.google.com")}} className={styles.hSite} src="/news-logo.jpg" width={160} height={160} alt="site"/>
                  <Image onClick={() => {gotoNews("https://www.google.com")}} className={styles.hSite} src="/news-logo.jpg" width={160} height={160} alt="site"/>
                </div>
              </>
            ):null
          }
          <div className={styles.columnTitle}>
            <span className={styles.titleSpan}>Card and Paper -- Blue Boxes</span>
              {
                this.state.showOther?(
                  <Button onClick={this.showOtherFun} icon={<CaretDownOutlined  />} />
                ):(
                  <Button onClick={this.showOtherFun} icon={<CaretRightOutlined />}  />
                )
              }
          </div>
          {
            this.state.showOther?(
              <div className={styles.otherCol}>
                <div className={styles.colItem}>
                  <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                    <div className={styles.nDot}>.</div>
                    <div className={styles.nText}>
                      2023 could be the year Meta's luck changes
                    </div>
                  </div>
                  <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                    <div className={styles.nDot}>.</div>
                    <div className={styles.nText}>
                      Apple industry moves to India?
                    </div>
                  </div>
                  <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                    <div className={styles.nDot}>.</div>
                    <div className={styles.nText}>
                      Are Tesla's days of comfort coming to an end?
                    </div>
                  </div>
                  <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                    <div className={styles.nDot}>.</div>
                    <div className={styles.nText}>
                      The red and black of high precision map: from the smart driving necessary to the car enterprise cumbersome
                    </div>
                  </div>
                  <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                    <div className={styles.nDot}>.</div>
                    <div className={styles.nText}>
                      How big is Apple's AR/VR industry chain potential?
                    </div>
                  </div>
                </div>
                <div className={styles.colItem}>
                  <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                    <div className={styles.nDot}>.</div>
                    <div className={styles.nText}>
                      Tesla's real worry: Did you get the tickets for the second half?
                    </div>
                  </div>
                  <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                    <div className={styles.nDot}>.</div>
                    <div className={styles.nText}>
                      New energy vehicle enterprise competition intensifies differentiated technology into the key competition market
                    </div>
                  </div>
                  <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                    <div className={styles.nDot}>.</div>
                    <div className={styles.nText}>
                      Returning home for the Spring Festival, we talked to the post-00s about these issues
                    </div>
                  </div>
                  <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                    <div className={styles.nDot}>.</div>
                    <div className={styles.nText}>
                      Systems, machines and algorithms are cold, but people have temperature
                    </div>
                  </div>
                  <div className={styles.rightNews} onClick={() => {gotoNews("https://www.google.com")}}>
                    <div className={styles.nDot}>.</div>
                    <div className={styles.nText}>
                      Google play back stab, Qualcomm, Mediatek panic
                    </div>
                  </div>
                </div>
              </div>
            ):null
          }
          
          <div className={styles.columnTitle}>
            <span className={styles.titleSpan}>Garden Waste</span>
              {
                this.state.showNews?(
                  <Button onClick={this.showNewsFun} icon={<CaretDownOutlined  />} />
                ):(
                  <Button onClick={this.showNewsFun} icon={<CaretRightOutlined />}  />
                )
              }
          </div>
          {
            this.state.showNews?(
              <div className={styles.currentNews}>
                <div className={styles.newsItem} onClick={() => {gotoNews("https://www.google.com")}}>
                  <Image className={styles.cImage} src="/c-1.jpg" width={234} height={132} alt="site"/>
                  <div className={styles.newsRightText}>
                    <div className={styles.newsRightTitle}>
                      The payment and settlement services of Iranian and Russian banks have been connected
                    </div>
                    <div className={styles.newsRightDesc}>
                      Iranian and Russian officials on Monday signed a memorandum of cooperation aimed at boosting financial and banking transactions between Iran and Russia and between Iran and 13 other countries.
                      Iranian and Russian officials on Monday signed a memorandum of cooperation aimed at boosting financial and banking transactions between Iran and Russia and between Iran and 13 other countries.
                      Iranian and Russian officials on Monday signed a memorandum of cooperation aimed at boosting financial and banking transactions between Iran and Russia and between Iran and 13 other countries.
                    </div>
                  </div>
                </div>
                <div className={styles.newsItem} onClick={() => {gotoNews("https://www.sohu.com/a/635390357_162522?scm=1102.xchannel:1649:110036.0.1.0~9110.8000.0.0.6634&spm=smpc.channel_114.block3_77_O0F7zf_1_fd.28.1675009296343sb2SYJ9_1524")}}>
                  <Image className={styles.cImage} src="/c-2.jpg" width={234} height={132} alt="site"/>
                  <div className={styles.newsRightText}>
                    <div className={styles.newsRightTitle}>
                      The Australian Prime minister has tweeted his congratulations to Novak Djokovic for winning the 2023 Australian Open men's singles title
                    </div>
                    <div className={styles.newsRightDesc}>
                      Novak Djokovic of Serbia won the men's singles final at the 2023 Australian Open in Melbourne, Australia, Sunday, beating Greece's Dzippas 3-0, according to CNN, Russian newspaper Kommersant and other foreign media. During the ceremony, Djokovic described his win as "the biggest victory of my life," CNN reported.
                    </div>
                  </div>
                </div>
                <div className={styles.newsItem} onClick={() => {gotoNews("https://www.sohu.com/a/635385164_115362?scm=1102.xchannel:1649:110036.0.1.0~9110.8000.0.0.6634&spm=smpc.channel_114.block3_77_O0F7zf_1_fd.33.1675009296343sb2SYJ9_1524")}}>
                  <Image className={styles.cImage} src="/c-3.jpg" width={234} height={132} alt="site"/>
                  <div className={styles.newsRightText}>
                    <div className={styles.newsRightTitle}>
                      The Hang Seng has had its best start to a year in nearly 20 years
                    </div>
                    <div className={styles.newsRightDesc}>
                      During the 2023 Spring Festival holiday, although the A-share market was closed, overseas Chinese assets kept running. China Golden Dragon Index and Hang Seng Science and Technology Index led the global rally during the Spring Festival holiday, raising A festive "China Red" in the global capital market.
                    </div>
                  </div>
                </div>
                <div className={styles.newsItem} onClick={() => {gotoNews("https://www.sohu.com/a/635383322_632178?scm=1102.xchannel:1649:110036.0.1.0~9110.8000.0.0.6634&spm=smpc.channel_114.block3_77_O0F7zf_1_fd.36.1675009296343sb2SYJ9_1524")}}>
                  <Image className={styles.cImage} src="/c-4.jpg" width={234} height={132} alt="site"/>
                  <div className={styles.newsRightText}>
                    <div className={styles.newsRightTitle}>
                      As Tesla slashed prices to achieve record sales, Musk said the Chinese were the most competitive in the electric car market
                    </div>
                    <div className={styles.newsRightDesc}>
                    In the fourth quarter of 2022, Tesla reported revenue of $23.4 billion, up 37 percent from the same period last year. The electric car maker's free cash flow was $1.4 billion at the end of the fourth quarter of 2022, down from $3.3 billion at the end of the third quarter.
                    </div>
                  </div>
                </div>
                <div className={styles.newsItem} onClick={() => {gotoNews("https://www.sohu.com/a/635381345_162522?scm=1102.xchannel:1649:110036.0.1.0~9110.8000.0.0.6634&spm=smpc.channel_114.block3_77_O0F7zf_1_fd.43.1675009296343sb2SYJ9_1524")}}>
                  <Image className={styles.cImage} src="/c-5.jpg" width={234} height={132} alt="site"/>
                  <div className={styles.newsRightText}>
                    <div className={styles.newsRightTitle}>
                    British Prime Minister Sunak issued an open letter: the decision to remove the Conservative Party chairman Zahavi from the British government
                    </div>
                    <div className={styles.newsRightDesc}>
                    Reuters, Agence France-Presse and other media reported on Monday that British Prime Minister Sunak has sacked Conservative Party chairman Nazem Zahavi from his post in the government. It comes after a tax investigation into Mr Zahavi found him in "serious breach" of cabinet rules.
                    </div>
                  </div>
                </div>
                <div className={styles.newsItem} onClick={() => {gotoNews("https://www.sohu.com/a/635377053_494439?scm=1102.xchannel:1649:110036.0.1.0~9110.8000.0.0.6634&spm=smpc.channel_114.block3_77_O0F7zf_1_fd.57.1675009296343sb2SYJ9_1524")}}>
                  <Image className={styles.cImage} src="/c-6.jpg" width={234} height={132} alt="site"/>
                  <div className={styles.newsRightText}>
                    <div className={styles.newsRightTitle}>
                    The noose is tightening around the impenetrable town of Avdivka as Russian military gains pile up
                    </div>
                    <div className={styles.newsRightDesc}>
                    The fact that the Russian army has recently taken the tactical initiative in almost all areas of the eastern and southern fronts is indicative of the severe blow to the morale of the Ukrainian army in the context of Wagner's overwhelming victory over Soledar and the advance in Bahmut.
                    </div>
                  </div>
                </div>
              </div>
            ):null
          }
          
          <div className={styles.footer}>
            <div className={styles.footerTags}>
              <div className={styles.tag} onClick={() => {gotoNews("https://www.google.com")}}>
                Some links or tags
              </div>
              <div className={styles.tag} onClick={() => {gotoNews("https://www.google.com")}}>
                Some links or tags
              </div>
              <div className={styles.tag} onClick={() => {gotoNews("https://www.google.com")}}>
                Some links or tags
              </div>
              <div className={styles.tag} onClick={() => {gotoNews("https://www.google.com")}}>
                Some links or tags
              </div>
              <div className={styles.tag} onClick={() => {gotoNews("https://www.google.com")}}>
                Some links or tags
              </div>
              <div className={styles.tag} onClick={() => {gotoNews("https://www.google.com")}}>
                Some links or tags
              </div>
            </div>
            <div className={styles.footerTags}>
              <div className={styles.tag} onClick={() => {gotoNews("https://www.google.com")}}>
                Some links or tags
              </div>
              <div className={styles.tag} onClick={() => {gotoNews("https://www.google.com")}}>
                Some links or tags
              </div>
              <div className={styles.tag} onClick={() => {gotoNews("https://www.google.com")}}>
                Some links or tags
              </div>
              <div className={styles.tag} onClick={() => {gotoNews("https://www.google.com")}}>
                Some links or tags
              </div>
              <div className={styles.tag} onClick={() => {gotoNews("https://www.google.com")}}>
                Some links or tags
              </div>
              <div className={styles.tag} onClick={() => {gotoNews("https://www.google.com")}}>
                Some links or tags
              </div>
            </div>
            <div className={styles.copyright}>
              Copyright © 2023 xxx All Rights Reserved.
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Index
