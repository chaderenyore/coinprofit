<template>
  <div class="mainContainer">
    <!-- SOME OF THE IMAGES CHANGES ON DIFFRENT SCREEN SIZES AND ON HOVER -->
    <section class="first-page" ref="mainpage">
      <!-- The icons are set to absolute positioning... -->

      <img
        src="../assets/images/listtle-Icons/1.svg"
        alt="little Icon"
        class="littleicon1"
      />
      <img
        src="../assets/images/listtle-Icons/2.svg"
        alt="little Icon"
        class="littleicon2"
      />
      <img
        src="../assets/images/listtle-Icons/3.svg"
        alt="little Icon"
        class="littleicon3"
      />
      <img
        src="../assets/images/listtle-Icons/4.svg"
        alt="little Icon"
        class="littleicon4"
      />

      <!-- End Icons -->
      <img src="../assets/images/Asset-1.svg" alt="" class="background-svg" />
      <div class="blob-wrapper">
        <img
          src="../assets/images/blob-mobil1.webp"
          alt="A blob SVG acts as a background here"
          class="blob1"
        />

        <img
          src="../assets/images/blob1.webp"
          alt="A blob SVG acts as a background here"
          class="blob1-d"
        />
      </div>
      <div class="about">
        <h1>Subscribe to your favourite crypto influencers/leaders</h1>

        <div class="slideshow-container">
          <div class="mySlides">
            <p>See the coins they buy, when they buy and when they sell!</p>
          </div>
        </div>
        <br />
        <div class="app-downloads">
          <a
            href="https://play.google.com/store/apps/details?id=com.procity.coinprofit"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="../assets/images/goplay.svg"
              alt=""
              srcset=""
              class="app-download"
          /></a>

          <!-- <a href="#" target="_blank" rel="noopener noreferrer"
            ><img
              src="../assets/images/appstore.svg"
              alt=""
              srcset=""
              class="app-download"
          /></a> -->
          <p class="comingSoon">IOS coming soon...!</p>
        </div>

        <div class="main-appUI_wrapper">
          <img src="../assets/images/appUI.webp" alt="" class="appui" />
        </div>
      </div>
    </section>

    <section class="review-section">
      <h1>
        Discover What Top Crypto Experts Are Saying about the CoinProfit App
      </h1>
      <div class="review-box">
        <div class="box">
          <div class="box-img">
            <app-image :lazy-src="chrisImg" class="review-img" />
          </div>
          <div class="star">
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="color: #fccf3b; font-size: 27px"
            ></i>
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="color: #fccf3b; font-size: 27px"
            ></i>
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="color: #fccf3b; font-size: 27px"
            ></i>
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="color: #fccf3b; font-size: 27px"
            ></i>
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="color: #fccf3b; font-size: 27px"
            ></i>
          </div>

          <h3 class="fadeIn-scroll">Chris Ani</h3>
          <p class="fadeIn-scroll">CEO And Founder: DABA.School</p>
          <div class="reviews">
            <p class="fadeIn-scroll">
              This is first of a kind product that will change the face of
              crypto social trading. Don't bet against this!
            </p>
          </div>
        </div>
        <div class="box">
          <div class="box-img">
            <app-image :lazy-src="tolaImg" class="review-img" />
          </div>
          <div class="star">
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="color: #fccf3b; font-size: 27px"
            ></i>
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="color: #fccf3b; font-size: 27px"
            ></i>
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="color: #fccf3b; font-size: 27px"
            ></i>
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="color: #fccf3b; font-size: 27px"
            ></i>
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="color: #fccf3b; font-size: 27px"
            ></i>
          </div>

          <h3>Tola Joseph Fadugbagbe</h3>
          <p>Founder: Crypto Masterclass</p>
          <div class="reviews">
            <p>CoinProfit App is a laudable development. Kudos!</p>
          </div>
        </div>
        <div class="box">
          <div class="box-img">
            <app-image :lazy-src="frankImg" class="review-img" />
          </div>
          <div class="star">
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="color: #fccf3b; font-size: 27px"
            ></i>
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="color: #fccf3b; font-size: 27px"
            ></i>
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="color: #fccf3b; font-size: 27px"
            ></i>
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="color: #fccf3b; font-size: 27px"
            ></i>
            <i
              class="fa fa-star"
              aria-hidden="true"
              style="color: #fccf3b; font-size: 27px"
            ></i>
          </div>

          <h3 class="fadeIn-scroll">Frank Nii Okanta Ankrah</h3>
          <p class="fadeIn-scroll">Founder: NiiOkanta Services LLC</p>
          <div class="reviews">
            <p class="fadeIn-scroll">
              I&prime;m Super Proud of the creators of the CoinProfit App.
              I&prime;m Very impressed with this creativity. a huge GAMECHANGER!
            </p>
          </div>
          <img
            src="../assets/images/listtle-Icons/5.svg"
            alt="little Icon"
            class="littleicon5"
          />
        </div>
      </div>
    </section>
    <!-- End Review Section-->

    <section class="app-features">
      <div class="copy-traders">
        <h1>Copy The Best Traders</h1>
        <app-image :lazy-src="feature1Img" class="copy-img" />

        <p class="slideIn">
          Don’t waste your money buying courses you won’t watch or joining
          countless Whatsapp groups, Facebook groups or Telegram channels
          looking for signals.

          <br />
          <br />
          Simply subscribe to your favorite crypto influencer/leader on the
          CoinProfit App. See the coins your leader is buying, when he buys and
          when he sells. You can simply copy him.
          <b>As your leader makes money, you make money too!</b>
        </p>
      </div>

      <div class="see-leaders">
        <h1>See Your Leader's Transactions In Real-Time</h1>
        <img src="../assets/images/see-leaders.webp" class="copy-img" />
        <!-- <app-image :lazy-src="seeLeadersImg" class="copy-img" /> -->

        <p>
          Don’t let anyone dump on you. Even if your leader has a limit order
          that is yet to be filled, you’ll see it right inside the CoinProfit
          App so you can enter the market when your leader is entering, and exit
          when he’s exiting. He makes a profit? You make a profit too!
        </p>
      </div>
    </section>
    <section class="get-signal">
      <h1>Get Signals From All Your Leaders In One Place</h1>
      <img
        src="../assets/images/listtle-Icons/dollarontop.svg"
        alt="little Icon"
        class="iconuntop"
      />
      <div class="blob-signal-wrapper slideIn">
        <img
          src="../assets/images/blob-signal.webp"
          alt="Blob Background for the Get Signal section"
          class="signal-blob"
        />
      </div>

      <div class="signal-packs">
        <app-image :lazy-src="customerImg" class="pack-img" />
      </div>

      <div class="signal-packs two">
        <app-image :lazy-src="verifiedUserImg" class="pack-img" />
      </div>

      <div class="signal-packs three">
        <app-image :lazy-src="moneyImg" class="pack-img" />
      </div>

      <div class="signal-planner-wrapper">
        <app-image :lazy-src="plannerSignalImg" class="signal-planner" />
      </div>

      <div class="main-signal-wrapper">
        <app-image :lazy-src="mainSiImg" class="main-signal-img" />
      </div>
      <img
        src="../assets/images/listtle-Icons/dollar.svg"
        alt="little Icon"
        class="dollarsvg"
      />
      <p class="signal-details">
        Get signals from the leading traders all in one place. Discover and rate
        their signal quality. Share whether or not you’ve been able to profit
        from the signal.
      </p>
    </section>

    <section class="meet-leaders">
      <div class="custom-shape-divider-top-1644369928">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div class="container">
        <div class="section-title">
          <h2>Meet Some Leaders On Coinprofit App</h2>
          <span class="section-separator"></span>
          <p>
            If you’re an expert, you can sign up as a leader and start making
            money sharing your crypto know-how.
          </p>
        </div>
      </div>
      <!-- This is a sliderjs framework.  -->

      <div class="testimonials-carousel-wrap">
        <div class="listing-carousel-button listing-carousel-button-next">
          <i class="fa fa-caret-right" style="color: #fff"></i>
        </div>
        <div class="listing-carousel-button listing-carousel-button-prev">
          <i class="fa fa-caret-left" style="color: #fff"></i>
        </div>
        <div class="testimonials-carousel">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testi-item">
                  <div class="testi-avatar">
                    <app-image :lazy-src="emmanuelImg" class="pack-img" />
                  </div>
                  <!-- <div class="leader-level">
                    <img src="../assets/images/leader-level.svg" />
                  </div> -->
                  <div class="testimonials-text">
                    <div class="testimonials-avatar">
                      <h3>Emmanuel Ohworeko</h3>
                    </div>
                    <p class="username">@lordemma</p>
                    <p>
                      Starting his crypto journey in 2020, Emmanuel has grown to
                      become a leader through constant learning!
                    </p>
                  </div>
                </div>
              </div>

              <!-- second -->
              <div class="swiper-slide">
                <div class="testi-item">
                  <div class="testi-avatar">
                    <app-image :lazy-src="UzoatuImg" />
                  </div>
                  <!-- <div class="leader-level">
                    <img src="../assets/images/leader-level1.svg" />
                  </div> -->
                  <div class="testimonials-text">
                    <div class="testimonials-avatar">
                      <h3>Bryan Ifeanyi</h3>
                    </div>
                    <p class="username">@Bryan</p>
                    <p>
                      My name is Bryan, I'm a Blockchain and cryptocurrency
                      educator. I joined the space in 2017, and from then on,
                      it's been a truly amazing journey. Learning, growing,
                      building, and teaching.
                    </p>
                  </div>
                </div>
              </div>
              <!--third-->

              <div class="swiper-slide">
                <div class="testi-item">
                  <div class="testi-avatar">
                    <app-image :lazy-src="mosesImg" />
                  </div>

                  <div class="testimonials-text">
                    <div class="testimonials-avatar">
                      <h3>Moses Ugoh</h3>
                    </div>
                    <p class="username">@BossVNN</p>
                    <p>
                      It was since 2020 that I realized Bitcoin’s maximum
                      potentials and my interest quickly expanded to everything
                      blockchain-related. I became particularly excited about
                      real-world applications of blockchain technology and
                      blockchain centered projects.
                    </p>
                  </div>
                </div>
              </div>

              <!--fourth-->
              <div class="swiper-slide">
                <div class="testi-item">
                  <div class="testi-avatar">
                    <app-image :lazy-src="marvelousImg" />
                  </div>

                  <div class="testimonials-text">
                    <div class="testimonials-avatar">
                      <h3>Marvelous Macaulay</h3>
                    </div>
                    <p class="username">@Iam_Marvelous</p>
                    <p>
                      Technical/Market Analyst. Not a Bull or Bear. I only trade
                      what the market shows me. No sentiments, Just Objective
                      Technical analysis.
                    </p>
                  </div>
                </div>
              </div>

              <!-- fifth -->
              <div class="swiper-slide">
                <div class="testi-item">
                  <div class="testi-avatar">
                    <app-image :lazy-src="ibrahimImg" />
                  </div>

                  <div class="testimonials-text">
                    <div class="testimonials-avatar">
                      <h3>Ibrahim Dauda</h3>
                    </div>
                    <p class="username">@Aazama</p>
                    <p>
                      The journey wasn't easy at the beginning. But I thank God
                      for the things I got from crypto investment.
                    </p>
                  </div>
                </div>
              </div>

              <!-- sixth -->
              <div class="swiper-slide">
                <div class="testi-item">
                  <div class="testi-avatar">
                    <app-image :lazy-src="ucheImage" />
                  </div>

                  <div class="testimonials-text">
                    <div class="testimonials-avatar">
                      <h3>Uche Sylvester</h3>
                    </div>
                    <p class="username">@Investorsylver</p>
                    <p>
                      I'm Uche, a Crypto enthusiast. I use my skillset to create
                      wealth and also diversify my income using crypto hedge
                      fund, farming and staking.
                    </p>
                  </div>
                </div>
              </div>

              <!-- 7th -->
              <div class="swiper-slide">
                <div class="testi-item">
                  <div class="testi-avatar">
                    <app-image :lazy-src="sibiImage" />
                  </div>

                  <div class="testimonials-text">
                    <div class="testimonials-avatar">
                      <h3>George Sibi onokuma</h3>
                    </div>
                    <p class="username">@Onokus</p>
                    <p>I'm a cryptocurrency trader and a coach.</p>
                  </div>
                </div>
              </div>

              <!-- 8th -->
              <div class="swiper-slide">
                <div class="testi-item">
                  <div class="testi-avatar">
                    <app-image :lazy-src="mukhtarImage" />
                  </div>

                  <div class="testimonials-text">
                    <div class="testimonials-avatar">
                      <h3>Adam Muhammad Mukhtar</h3>
                    </div>

                    <p class="username">@Ammukhtar2</p>
                    <p>
                      I'm a Cryptocurrency freak. Since the sunrise of 2021,
                      with mutual Fundamental and technical analyses, I have
                      been growing and educating my crypto community of over six
                      thousand members, most of them are locals than global.
                    </p>
                  </div>
                </div>
              </div>

              <!-- 9th -->
              <div class="swiper-slide">
                <div class="testi-item">
                  <div class="testi-avatar">
                    <app-image :lazy-src="BKImage" />
                  </div>

                  <div class="testimonials-text">
                    <div class="testimonials-avatar">
                      <h3>Ibrahim BK</h3>
                    </div>

                    <p class="username">@khaleell</p>
                    <p>
                      I'm Ibrahim BK. A professional crypto trader with 3+ years
                      of experience in Blockchain development.
                    </p>
                  </div>
                </div>
              </div>

              <!-- 10th -->
              <div class="swiper-slide">
                <div class="testi-item">
                  <div class="testi-avatar">
                    <app-image :lazy-src="voskiImage" />
                  </div>

                  <div class="testimonials-text">
                    <div class="testimonials-avatar">
                      <h3>Stephen Voski</h3>
                    </div>

                    <p class="username">@Voski</p>
                    <p>
                      I'm Chukwu Stephen Ndubuisi, popularly known as Voski.
                      I've been a blockchain and cryptocurrency advocate since
                      2016. My aim has always been to change the lives of
                      others, using the opportunities provided by blockchain
                      technology.
                    </p>
                  </div>
                </div>
              </div>

              <!-- 12th -->
              <div class="swiper-slide">
                <div class="testi-item">
                  <div class="testi-avatar">
                    <app-image :lazy-src="chuwkwuImage" />
                  </div>

                  <div class="testimonials-text">
                    <div class="testimonials-avatar">
                      <h3>Victor Chukwu</h3>
                    </div>

                    <p class="username">@Vicsouls</p>
                    <p>
                      I'm Victor CHUKWU. I have been able to coach and still
                      coaching a lot of people in the crypto space. I have been
                      in the crypto space for quite a long time now, and I have
                      seen both failures and success, the ups and downs, but I
                      keep the movement because of the B PICTURE.
                    </p>
                  </div>
                </div>
              </div>

              <!--testi end-->
            </div>
          </div>
        </div>

        <!-- <div class="swiper-pagination">
          <span></span>
           <span></span>
            <span></span>
        </div> -->
      </div>
      <div class="leaders-app-download">
        <a
          href="https://play.google.com/store/apps/details?id=com.procity.coinprofit"
          target="_blank"
          rel="noopener noreferrer"
          ><img src="../assets/images/goplay.svg" alt=""
        /></a>

        <!-- <a href="#" target="_blank" rel="noopener noreferrer"
          ><img src="../assets/images/appstore.svg" alt=""
        /></a> -->
        <p class="comingSoon font-bold md:font-semibold text-2xl">
          IOS coming soon...!
        </p>
      </div>

      <!-- End sliderjs framework -->

      <div class="custom-shape-divider-bottom-1644463655">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>

    <section>
      <div class="featuretwo-wrapper">
        <div class="app-features-two" style="margin-bottom: 90px">
          <h1>Create Your Own Trading Plans</h1>
          <div class="trade-img-box">
            <app-image
              :lazy-src="plannerTradeLesson"
              class="trade-img"
              alt="Create your trading plan"
            />
          </div>
          <p>
            Trade responsibly and profitably by creating a trading plan that
            works for you.<br />
            <br />
            Plan your entry, stop loss, and take profit targets. Use tags to
            organize your plans. Receive notifications whenever your coin hits
            your target or stop limit.
          </p>
        </div>
        <div class="trade-lessons">
          <h1>Record Your Trade Lessons</h1>
          <div class="record-img-box">
            <app-image
              :lazy-src="tradeLesson"
              class="record-img"
              alt="Record your trade lessons"
            />
          </div>
          <p>
            You trade on the go, so why not have your lessons on the go? <br />
            <br />

            With CoinProfit App, you can record your trade lessons and keep a
            journal, so you can continue learning anytime, anywhere. <br />
            <br />

            Keeping records of your good and bad trades helps you make better
            trading decisions. We make this incredibly easy for you, so you can
            win in the crypto space. WAGMI! (We All Gonna Make It)
            <br />
          </p>
        </div>
      </div>
    </section>

    <section class="auto-sec">
      <div class="custom-shape-divider-top-1644623960">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class="auto-track">
        <h1>
          Automatically Track Your Portfolio Across Multiple Exchange Platforms
        </h1>
        <div class="track-img-box">
          <app-image
            :lazy-src="portfolioUpgradedImage"
            class="auto-track-img"
            alt="App Feature 1"
          />
        </div>
        <p>
          Conveniently and securely monitor your entire portfolio on one
          platform without worrying about compromising your data. CoinProfit
          supports over 300 exchanges and more than 8,000 crypto assets.
        </p>
        <a href="#download-app"
          ><button class="auto-button btn-1">TRY NOW</button></a
        >

        <!-- The icons are set to absolute positioning... -->
        <img
          src="../assets/images/listtle-Icons/6.svg"
          alt=""
          srcset=""
          class="littleIcon6"
        />
        <img
          src="../assets/images/listtle-Icons/7.svg"
          alt=""
          srcset=""
          class="littleIcon7"
        />
        <img
          src="../assets/images/listtle-Icons/5.svg"
          alt=""
          srcset=""
          class="littleIcon8"
        />
        <img
          src="../assets/images/listtle-Icons/roundicon.svg"
          alt=""
          srcset=""
          class="roundicon1"
        />
        <!-- ENd little Icons -->
      </div>
      <div class="custom-shape-divider-bottom-1644660326">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>

    <section class="profit-loss-sec">
      <div class="profit-loss">
        <h1>
          See Your <span class="Hprofit">Profit</span
          ><span class="Hslash">/</span><span class="Hloss">Loss</span> at a
          Glance!
        </h1>

        <div class="proft-loss-img-box">
          <img
            src="../assets/images/listtle-Icons/4.svg"
            alt=""
            srcset=""
            class="littleIconS1"
          />
          <img
            src="../assets/images/listtle-Icons/3.svg"
            alt=""
            srcset=""
            class="littleIconS2"
          />
          <app-image
            :lazy-src="profitLossImage"
            class="proft-loss-img"
            alt="See your profit and Loss."
          />
          <!-- this images will only be displayed on desktop screens -->
          <img
            src="../assets/images/groupshareeth1.svg"
            alt=""
            srcset=""
            class="groupshare geth1"
          />
          <img
            src="../assets/images/groupsharebsc1.svg"
            alt=""
            srcset=""
            class="groupshare gbsc1"
          />

          <img
            src="../assets/images/groupsharebsc2.svg"
            alt=""
            srcset=""
            class="groupshare gbsc2"
          />
          <img
            src="../assets/images/groupshareeth2.svg"
            alt=""
            srcset=""
            class="groupshare geth2"
          />
        </div>
      </div>
    </section>

    <section class="share-portfolio-sec">
      <div class="custom-shape-divider-top-1644670257">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div class="share-portfolio">
        <h1>Share Your Portfolio Performance</h1>
        <div class="share-portfolio-box">
          <app-image
            :lazy-src="shareImg"
            class="share-portfolio-img"
            alt="Share Image"
          />
        </div>
        <app-image :lazy-src="shareBlob" class="share-blob" />
        <p>
          Did you buy a coin that did 100%, 200% or even 1000% in profit? Then
          you deserve a bottle of champagne and bragging rights! Take some of
          your profit, go get champagne and use CoinProfit App to let the world
          know how you roll. You deserve it. You can share the performance of an
          asset or a particular transaction.
        </p>
      </div>

      <div class="custom-shape-divider-bottom-1644669891">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>

    <section class="exchange-sec">
      <div class="exchange-wrapper">
        <h1>Supported Exchanges and Wallets</h1>
        <div class="exchange-box-wrapper">
          <div class="exchange-box">
            <app-image
              :lazy-src="binanceLogo"
              alt="binance-logo"
              class="exchange-logo"
            />
            <p>Binance</p>
          </div>
        </div>
        <div class="exchange-box-wrapper">
          <div class="exchange-box">
            <app-image
              :lazy-src="kcsLogo"
              alt="exchange-logo"
              class="exchange-logo"
            />
            <p>kucoin</p>
          </div>
        </div>
        <div class="exchange-box-wrapper">
          <div class="exchange-box">
            <app-image
              :lazy-src="ftxLogo"
              alt="exchange-logo"
              class="exchange-logo"
            />
            <p>FTX</p>
          </div>
        </div>
        <!-- <div class="exchange-box-wrapper">
          <div class="exchange-box">
            <img
              src="../assets/images/gateio.svg"
              alt="exchange-logo"
              class="exchange-logo"
            />
            <p>Gateio</p>
          </div>
        </div>
        <div class="exchange-box-wrapper">
          <div class="exchange-box">
            <img
              src="../assets/images/okex-2.svg"
              alt="exchange-logo"
              class="exchange-logo"
            />
            <p>Okex</p>
          </div>
        </div>
        <div class="exchange-box-wrapper">
          <div class="exchange-box">
            <img
              src="../assets/images/Binance-Smart-Chain.svg.svg"
              alt="binance-logo"
              class="exchange-logo bsc"
            />
            <p>BSC</p>
          </div>
        </div>
        <div class="exchange-box-wrapper">
          <div class="exchange-box coinbase">
            <img
              src="../assets/images/Coinbase.svg"
              alt="binance-logo"
              class="exchange-logo min"
            />
            <p>coinbase</p>
          </div>
        </div>
        <div class="exchange-box-wrapper">
          <div class="exchange-box uniswap">
            <img
              src="../assets/images/Uniswap-(UNI).svg"
              alt="binance-logo"
              class="exchange-logo min"
            />
            <p>Uniswap</p>
          </div>
        </div>
        <div class="exchange-box-wrapper nine">
          <div class="exchange-box">
            <img
              src="../assets/images/Pancakeswap.svg"
              alt="binance-logo"
              class="exchange-logo min"
            />
            <p>Pancake Swap</p>
          </div>
        </div>
        <div class="exchange-box-wrapper ten">
          <div class="exchange-box">
            <img
              src="../assets/images/ethereum-1.svg"
              alt="binance-logo"
              class="exchange-logo"
            />
            <p>ethereum</p>
          </div>
        </div> -->
        <p class="get-details">Get the app now on the Google Play Store.</p>
        <div class="exchange-download-wrapper">
          <a
            href="https://play.google.com/store/apps/details?id=com.procity.coinprofit"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="../assets/images/goplay.svg"
              alt=""
              srcset=""
              class="exchange-download"
          /></a>

          <!-- <a href="#" target="_blank" rel="noopener noreferrer"
            ><img
              src="../assets/images/appstore.svg"
              alt=""
              srcset=""
              class="exchange-download"
          /></a> -->
        </div>
        <p class="comingSoon">IOS coming soon...!</p>
      </div>
    </section>

    <section class="users-review">
      <h1>What Our Users Are Saying...</h1>

      <div class="user-review-box">
        <div class="splide">
          <div class="splide__arrows">
            <button class="splide__arrow splide__arrow--prev">
              <i class="fa fa-angle-left"></i>
            </button>
            <button class="splide__arrow splide__arrow--next">
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
          <div class="splide__progress"></div>
          <div class="splide__track">
            <div class="splide__list">
              <div class="splide__slide">
                <h3>Kingdom Augustine</h3>
                <div class="users-img-wrapper">
                  <app-image :lazy-src="kingdomImg" />
                </div>
                <div class="star-review">
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    style="color: #fccf3b; font-size: 27px"
                  ></i>
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    style="color: #fccf3b; font-size: 27px"
                  ></i>
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    style="color: #fccf3b; font-size: 27px"
                  ></i>
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    style="color: #fccf3b; font-size: 27px"
                  ></i>
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    style="color: #fccf3b; font-size: 27px"
                  ></i>
                </div>
                <p>
                  Swift experience in all modules. This is at last the
                  opportunity for the average person who's not interested in the
                  technicalities of trading to make wealth. I personally call
                  this app "trade made easy".
                </p>
              </div>

              <div class="splide__slide">
                <h3>Israel Odenu</h3>
                <div class="users-img-wrapper">
                  <app-image :lazy-src="israelImage" />
                </div>
                <div class="star-review">
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    style="color: #fccf3b; font-size: 27px"
                  ></i>
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    style="color: #fccf3b; font-size: 27px"
                  ></i>
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    style="color: #fccf3b; font-size: 27px"
                  ></i>
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    style="color: #fccf3b; font-size: 27px"
                  ></i>
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    style="color: #fccf3b; font-size: 27px"
                  ></i>
                </div>
                <p>
                  The best app I have ever seen, easy Navigation, and a great
                  "if" Calculator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="users-CTA">Get the app now on the Google Play Store.</p>
      <div class="exchange-download-wrapper">
        <a
          href="https://play.google.com/store/apps/details?id=com.procity.coinprofit"
          target="_blank"
          ><img
            src="../assets/images/goplay.svg"
            alt=""
            srcset=""
            class="exchange-download"
        /></a>

        <!-- <a href="#" target="_blank" 
          ><img
            src="../assets/images/appstore.svg"
            alt=""
            srcset=""
            class="exchange-download"
        /></a> -->
        <p class="comingSoon">IOS coming soon...!</p>
      </div>
    </section>

    <section>
      <div class="learn-more">
        <h1>Want To Know More?</h1>

        <span class="vid-play">
          <i class="fa fa-play" aria-hidden="true"></i>
        </span>
        <div class="vid-play-wrapper">
          <div class="video-img"></div>
        </div>
        <p>
          Get signals from different leaders in one place, see their signal
          quality, rate the signals and let everyone know if you made money from
          the signal or not.
        </p>
        <a href="#download-app"
          ><button class="learn-moreBTN">Learn More</button></a
        >
      </div>
      <div class="video-modal">
        <div class="modal-container">
          <span class="vid-close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path
                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
              />
            </svg>
          </span>

          <div class="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/H9154xIoYTA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="faq-wrapper">
        <h1>FAQ</h1>

        <div class="faqcontainer">
          <div class="faqwrapper">
            <button class="faqtoggle">
              <h3>I&rsquo;m New To Crypto. Who Should I Subscribe To?</h3>
              <i class="fa fa-chevron-down faqicon" style="color: #3374ea"></i>
            </button>
            <div class="faqcontent">
              <p>
                We are working on adding rating and analytics systems to the
                CoinProfit app so it will be easier for you to see the track
                records of all the leaders. In the meantime, we encourage you to
                subscribe to only leaders you know and trust. If you are
                completely new and don&rsquo;t know any leader, your best bet
                will be to subscribe to our CEO and Founder - Emmanuel Ohworeko
                or any of the leaders featured on the leader's page of our
                website.
              </p>
            </div>
          </div>
          <div class="faqwrapper">
            <button class="faqtoggle">
              <h3>How Can I Download The Coinprofit App?</h3>
              <i class="fa fa-chevron-down faqicon" style="color: #3374ea"></i>
            </button>
            <div class="faqcontent">
              <p>
                We are available on both the IOS and Android app store. Please
                use the download button above to download the app to your
                device.
              </p>
            </div>
          </div>
          <div class="faqwrapper">
            <button class="faqtoggle">
              <h3>How Much Does It Cost To Subscribe To A Leader?</h3>
              <i class="fa fa-chevron-down faqicon" style="color: #3374ea"></i>
            </button>
            <div class="faqcontent">
              <p>
                Every leader on the platform determines how much he wants to
                charge for his subscription.
              </p>
            </div>
          </div>

          <div class="faqwrapper">
            <button class="faqtoggle">
              <h3>What Payment Method Do You Accept?</h3>
              <i class="fa fa-chevron-down faqicon" style="color: #3374ea"></i>
            </button>
            <div class="faqcontent">
              <p>
                All Payments on the CoinProfit App are facilitated through
                cryptocurrency. We do not accept credit cards or paypal.
              </p>
            </div>
          </div>
        </div>
        <div class="faqcontainer">
          <div class="faqwrapper">
            <button class="faqtoggle">
              <h3>How do I subscribe to a leader?</h3>
              <i class="fa fa-chevron-down faqicon" style="color: #3374ea"></i>
            </button>
            <div class="faqcontent">
              <p>
                After downloading the CoinProfit App, go to the explore tab
                under the ‘Leader’ section. Search for the leader you want to
                subscribe to, click on his profile and click on subscribe. The
                cost of subscribing to each leader is shown on his profile. When
                you click on subscribe, a USDT wallet address via BSC network
                will be generated for you. Send the equivalent USDT to the
                address and click on confirm. Once payment is confirmed, your
                subscription will be activated.
              </p>
            </div>
          </div>

          <div class="faqwrapper">
            <button class="faqtoggle">
              <h3>I’m Subscribed To A Leader But Don’t Know How To Trade?</h3>
              <i class="fa fa-chevron-down faqicon" style="color: #3374ea"></i>
            </button>
            <div class="faqcontent">
              <p>
                We have resources to help you get started in your crypto
                journey. Please check out our help centre.
              </p>
            </div>
          </div>
          <div class="faqwrapper">
            <button class="faqtoggle">
              <h3>Do You Support Future Trading?</h3>
              <i class="fa fa-chevron-down faqicon" style="color: #3374ea"></i>
            </button>
            <div class="faqcontent">
              <p>
                Not yet. We only support spot trading for now but we have plans
                to support future trading in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <BaseCallToAction />
</template>

<script>
  // import $ from "jquery";
  import Swiper from "swiper/bundle";
  import Splide from "@splidejs/splide";
  import AppImage from "@/components/AppImage.vue";

  export default {
    components: {
      AppImage,
    },

    data() {
      return {
        title: "CoinProfit",
      };
    },

    computed: {
      chrisImg() {
        return require("../assets/images/chris.webp");
      },

      tolaImg() {
        return require("../assets/images/tola.jpeg");
      },

      frankImg() {
        return require("../assets/images/Frank.webp");
      },

      seeLeadersImg() {
        return require("../assets/images/see-leaders.webp");
      },

      feature1Img() {
        return require("../assets/images/app-feature1.webp");
      },

      customerImg() {
        return require("../assets/images/customer.webp");
      },

      verifiedUserImg() {
        return require("../assets/images/verified-user.webp");
      },

      moneyImg() {
        return require("../assets/images/money.webp");
      },

      plannerSignalImg() {
        return require("../assets/images/planner-signal.webp");
      },

      mainSiImg() {
        return require("../assets/images/main-si.webp");
      },

      emmanuelImg() {
        return require("../assets/images/leaders/emmanuel.webp");
      },

      UzoatuImg() {
        return require("../assets/images/leaders/Uzoatu.jpeg");
      },

      mosesImg() {
        return require("../assets/images/leaders/moses.jpeg");
      },

      marvelousImg() {
        return require("../assets/images/leaders/marvelous.webp");
      },

      ibrahimImg() {
        return require("../assets/images/leaders/Ibrahim.jpeg");
      },

      ucheImage() {
        return require("../assets/images/leaders/uche.jpeg");
      },

      sibiImage() {
        return require("../assets/images/leaders/sibi.jpeg");
      },

      mukhtarImage() {
        return require("../assets/images/leaders/mukhtar.jpeg");
      },

      BKImage() {
        return require("../assets/images/leaders/BK.webp");
      },

      voskiImage() {
        return require("../assets/images/leaders/voski.webp");
      },

      chuwkwuImage() {
        return require("../assets/images/leaders/CHUKWU.jpeg");
      },

      plannerTradeLesson() {
        return require("../assets/images/planner-trade-lesson.webp");
      },

      tradeLesson() {
        return require("../assets/images/trade-lesson.svg");
      },

      portfolioUpgradedImage() {
        return require("../assets/images/Portfolio-Upgraded.webp");
      },

      profitLossImage() {
        return require("../assets/images/profit-loss.png");
      },

      shareImg() {
        return require("../assets/images/share-img.webp");
      },

      shareBlob() {
        return require("../assets/images/share-blob.png");
      },

      binanceLogo() {
        return require("../assets/images/binance-logo.svg");
      },

      kcsLogo() {
        return require("../assets/images/kcs-3.svg");
      },

      ftxLogo() {
        return require("../assets/images/ftx-2.svg");
      },

      goplayImg() {
        return require("../assets/images/goplay.svg");
      },

      appstoreImg() {
        return require("../assets/images/appstore.svg");
      },

      kingdomImg() {
        return require("../assets/images/kingdom.jpeg");
      },

      israelImage() {
        return require("../assets/images/israel.webp");
      },
    },

    methods: {
      useSplide() {
        new Splide(".splide", {
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 2000, // How long to display each slide
          pauseOnHover: true, // m
          pauseOnFocus: false, // must be
          resetProgress: false,
        }).mount();
      },

      initIndexFile() {
        // PAGE SCROLL ANIMATIONS ENDS HERE

        // leaders silder starts here

        function initParadoxWay() {
          "use strict";

          
          // if ($(".testimonials-carousel").length > 0) {
            new Swiper(".testimonials-carousel .swiper-container", {
              preloadImages: false,
              slidesPerView: 1,
              spaceBetween: 20,
              loop: true,
              freeMode: true,
              grabCursor: true,
              mousewheel: false,
              centeredSlides: true,
              disableOnInteraction: false,
              pagination: {
                el: ".tc-pagination",
                clickable: true,
                dynamicBullets: true,
              },
              autoplay: {
                delay: 2000, // auto play at 2s.
              },
              navigation: {
                nextEl: ".listing-carousel-button-next",
                prevEl: ".listing-carousel-button-prev",
              },
              breakpoints: {
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1200: {
                  spaceBetween: 50,
                  slidesPerView: 3,
                },
              },
            });
          // }
        }

        // $(document).ready(function () {
          initParadoxWay();
        // });

        this.useSplide();

        // Learn More Video codes starts here. When you click on the play icon, the video pops out of the page

        const playIcon = document.querySelector(".vid-play"),
          closeIcon = document.querySelector(".vid-close");
        const playVideoModal = document.querySelector(".video-modal");

        playIcon.addEventListener("click", function () {
          playVideoModal.classList.add("showmodal");
        });
        closeIcon.addEventListener("click", function () {
          playVideoModal.classList.remove("showmodal");
          var iframes = playVideoModal.getElementsByTagName("iframe");
          if (iframes != null) {
            for (let i = 0; i < iframes.length; i++) {
              const iframe = iframes[i];
              let framer = iframe.src;
              iframe.src = framer;
            }
          }
        });

        // Learn more video codes ends here

        // FAQ SECTION
        let faqtoggles = document.getElementsByClassName("faqtoggle");
        let faqcontentDiv = document.getElementsByClassName("faqcontent");
        let faqicons = document.getElementsByClassName("faqicon");

        for (let i = 0; i < faqtoggles.length; i++) {
          faqtoggles[i].addEventListener("click", () => {
            if (
              parseInt(faqcontentDiv[i].style.height) !=
              faqcontentDiv[i].scrollHeight
            ) {
              faqcontentDiv[i].style.height =
                faqcontentDiv[i].scrollHeight + "px";
              faqicons[i].classList.remove("fa-chevron-down");
              faqicons[i].classList.add("fa-chevron-up");
            } else {
              faqcontentDiv[i].style.height = "0px";
              faqicons[i].classList.remove("fa-chevron-up");
              faqicons[i].classList.add("fa-chevron-down");
            }

            for (let j = 0; j < faqcontentDiv.length; j++) {
              if (j !== i) {
                faqcontentDiv[j].style.height = "0px";
                faqicons[j].classList.remove("fa-chevron-up");
                faqicons[j].classList.add("fa-chevron-down");
              }
            }
          });
        }
      },
    },

    mounted() {
      this.initIndexFile();
    },

    head: {
      // To use "this" in the component, it is necessary to return the object through a function
      title: function () {
        return {
          inner: this.title,
          separator: "-",
          complement: "Home",
        };
      },
      meta: [
        {
          name: "description",
          content: "coinprofit - easily track your crypto assets",
          id: "desc",
        },
        {
          name: "keywords",
          content:
            "bitcoin,crypto tracking, track crypto assets, eth, tracking, portfolio tracking",
          id: "keywords",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black",
        },
        {
          name: "apple-mobile-web-app-title",
          content: "CoinProfit - Home",
        },
        {
          property: "og:description",
          content:
            "coinProfit - Subscribe to your favourite crypto influencers/leaders",
        },
        {
          property: "og:title",
          content:
            "Subscribe to your favourite crypto influencers/leaders and see the coins they buy",
        },
      ],
    },
  };
</script>

<style scoped>
  @import "swiper/css/bundle";
  @import "@splidejs/splide/dist/css/splide.min.css";
  .mainContainer {
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    .mainContainer {
      padding-top: 7rem;
    }
  }

  .littleicon1 {
    position: absolute;
    top: 30%;
    left: 8%;
    width: 5rem;
  }

  .littleicon2 {
    position: absolute;
    top: 50%;
    left: 7%;
    width: 4rem;
  }

  .littleicon3 {
    position: absolute;
    top: 60%;
    left: 75%;
    width: 4rem;
  }
  .littleicon4 {
    position: absolute;
    top: 90%;
    left: 1%;
    width: 4rem;
    z-index: 1;
  }
  .littleicon5 {
    position: absolute;
    width: 1.5rem;
  }

  .first-page {
    width: 100%;
    position: relative;
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 470px) {
    .first-page {
      margin-bottom: 20rem;
    }
  }
  @media only screen and (min-width: 600px) {
    .first-page {
      margin-bottom: 30rem;
    }
  }
  .blob-wrapper {
    position: relative;
    overflow-x: hidden;
    z-index: -1;
    height: 60rem;
  }
  .blob1 {
    object-fit: cover;
    position: relative;
    top: -28rem;
    left: -16rem;
    height: auto;
    max-width: 98rem;
    z-index: -1;
  }

  /* blob1-d will not be displayed on mobile screen - cux it's another image with another style */
  .blob1-d {
    display: none;
  }

  .background-svg {
    display: none;
  }

  .about {
    position: absolute;
    top: 10rem;
    text-align: center;
  }
  .about h1 {
    font-family: "Montserrat", sans-serif;
    width: 90%;
    font-weight: bold;
    margin: -10px auto 0;
    text-align: center;
    color: #fff;
    letter-spacing: 0;
  }

  /* Slideshow container */
  .slideshow-container {
    max-width: 1000px;
    position: relative;
    /* margin: auto; */
  }
  .mySlides {
    height: 40px;
  }
  .slideshow-container p {
    font-weight: bold;
    width: 78%;
    color: #fff;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    margin: 10px auto;
  }

  .app-downloads {
    position: relative;
    margin: 2rem auto 0;
    width: 100%;
  }
  .app-download {
    display: block;
    width: 45%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
  }
  .comingSoon {
    margin-top: 1rem;
    color: var(--fifth-color);
  }
  .main-appUI_wrapper {
    position: relative;
  }
  .appui {
    width: 80%;
  }

  .review-section {
    position: relative;
    width: 100%;
    font-family: "Montserrat", sans-serif;
    padding-top: 2rem;
  }
  .review-section h1 {
    width: 80%;
    margin: 0 auto;
    color: #3374ea;
    text-align: center;
    font-weight: 800;
    margin-bottom: 90px;
  }
  .review-section p {
    text-align: center;
    margin-top: 4px;
    color: #525b6d;
    line-height: 30px;
  }
  .review-box {
    margin-top: 40px;
  }
  .box {
    width: 90%;
    padding: 0px 20px 10px;
    background: var(--third-color) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000008;
    display: block;
    margin: 0 auto 6rem;
    font-family: "Montserrat", sans-serif;
    border-radius: 10px;
  }

  .box-img {
    position: relative;
    top: -60px;
    height: 140px;
    width: 140px;
    margin: auto;
    border: 8px solid var(--light-color);
    border-radius: 50%;
    overflow: hidden;
  }
  .review-img {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    object-fit: cover;
    transition: 0.3s ease;
  }

  .review-img:hover {
    filter: saturate(140%);
    transform: scale(0.95);
  }

  .star {
    text-align: center;
  }
  .box h3 {
    text-align: center;
    color: #3374ea;
    margin-bottom: 7px;
  }
  .box p {
    color: var(--fourth-color);
    font-size: 0.9rem;
  }

  .reviews p {
    color: var(--fourth-color);
    margin-top: 20px;
    font-size: 17px;
  }

  .app-features {
    position: relative;
    width: 90%;
    margin: 0 auto;
  }

  .app-features h1 {
    margin-bottom: 50px;
    color: #3374ea;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    text-align: center;
  }
  .app-features p {
    color: var(--fourth-color);
    text-align: center;
    font-size: 17px;
    line-height: 30px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    margin-top: 20px;
  }

  .see-leaders {
    margin: 50px auto 20px;
  }

  .get-signal {
    margin-top: 5rem;
    position: relative;
  }
  .iconuntop {
    position: absolute;
    width: 2rem;
    left: 80%;
    top: 15%;
  }
  .dollarsvg {
    position: absolute;
    top: 90%;
    left: 10%;
    width: 2rem;
  }
  .copy-img {
    width: 100%;
    margin-left: 10px;
  }
  .seeLeaders-img-box {
    width: 100%;
  }

  .seeLeaders-img {
    width: 100%;
  }

  .get-signal h1 {
    width: 90%;
    color: #3374ea;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    text-align: center;
    margin: 0 auto;
  }
  .signal-details {
    width: 80%;
    position: relative;
    top: 120px;
    color: var(--fourth-color);
    font-size: 17px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    margin: 0 auto;
    text-align: center;
    line-height: 30px;
  }

  .blob-signal-wrapper {
    position: absolute;
    top: 100px;
    z-index: -1;
    width: 100%;
    overflow-x: hidden;
  }

  .signal-blob {
    position: relative;
    top: -6rem;
    left: -30%;
    width: 1000px;
    height: 53rem;
  }
  @media (min-width: 480px) {
    .signal-blob {
      top: -3rem;
      left: -10%;
      height: 60rem;
    }
  }

  .signal-packs {
    position: absolute;
    top: 25%;
    left: 65%;
  }
  .signal-packs.one {
    position: absolute;
    top: 25%;
    left: 66%;
    left: 55%;
  }
  .signal-packs.two {
    top: 43%;
  }

  .signal-packs.three {
    top: 61%;
  }

  @media (min-width: 480px) {
    .signal-packs {
      top: 29%;
      left: 70%;
    }

    .signal-packs.two {
      top: 45%;
    }

    .signal-packs.three {
      top: 63%;
    }
  }
  .pack-img {
    width: 100%;
    width: 80%;
    margin-left: 10%;
  }

  .main-signal-wrapper {
    display: none;
  }
  .signal-planner-wrapper {
    position: relative;
    top: 4.1rem;
    left: -20px;
    width: 90%;
  }

  .signal-planner {
    width: 100%;
  }
  /* starts custom divider */
  .custom-shape-divider-top-1644369928 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1644369928 svg {
    position: relative;
    display: block;
    width: calc(109% + 1.3px);
    height: 78px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-top-1644369928 .shape-fill {
    fill: var(--light-color);
  }

  .custom-shape-divider-bottom-1644370252 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1644370252 svg {
    position: relative;
    display: block;
    width: calc(113% + 1.3px);
    height: 95px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1644370252 .shape-fill {
    fill: var(--light-color);
  }

  /* Ends custom divider */

  .meet-leaders {
    position: relative;
    margin-top: 10rem;
    width: 100%;
    background: transparent linear-gradient(180deg, #22a1f5 0%, #677bff 100%) 0%
      0% no-repeat padding-box;
    padding-top: 100px;
    padding-bottom: 10rem;
    overflow-x: hidden;
  }

  .section-title {
    position: relative;
    width: 80%;
    padding-bottom: 40px;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    margin: 0 auto;
  }
  .section-title p {
    color: #fff;
    font-size: 13px;
    line-height: 20px;
  }
  .section-title h2 {
    float: left;
    width: 100%;
    text-align: center;
    font-size: 34px;
    font-weight: 800;
    position: relative;
  }
  .section-separator {
    float: left;
    width: 100%;
    position: relative;
    margin: 20px 0;
  }
  .section-separator:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    height: 3px;
    width: 50px;
    border-radius: 3px;
    z-index: 2;
    background-color: #fff;
    margin-left: -25px;
  }
  .swiper-container {
    width: 100%;
    /* height: 100%; */
  }
  .listing-carousel-button {
    position: absolute;
    top: 50%;
    width: 80px;
    height: 50px;
    line-height: 50px;
    margin-top: -25px;
    z-index: 3;
    cursor: pointer;
    background: #da0c0c46;
    box-shadow: 0 9px 26px rgba(58, 87, 135, 0.45);
    transition: all 200ms linear;
    outline: none;
  }
  .listing-carousel-button.listing-carousel-button-next {
    right: -30px;
    padding-right: 20px;
    border-radius: 60px 0 0 60px;
  }
  .listing-carousel-button.listing-carousel-button-prev {
    left: -30px;
    padding-left: 65px;
    border-radius: 0 60px 60px 0;
  }
  .listing-carousel-button.listing-carousel-button-next:hover {
    right: -15px;
    background: rgba(6, 27, 65, 0.4);
  }
  .listing-carousel-button.listing-carousel-button-prev:hover {
    left: -15px;
    background: rgba(6, 27, 65, 0.4);
  }
  .testi-item {
    transition: all 0.3s ease-in-out;
    transform: scale(0.9);
    opacity: 0.9;
  }
  .testimonials-text {
    padding: 75px 50px 75px;
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    width: 90%;
    margin: 0 auto;
    box-shadow: 0 9px 26px rgba(58, 87, 135, 0.1);
  }
  .testimonials-avatar h3 {
    font-weight: 600;
    color: #fff;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
  }
  .testimonials-carousel .swiper-slide {
    padding: 30px 0;
  }
  .testi-avatar {
    position: absolute;
    left: 50%;
    top: -30px;
    width: 100px;
    height: 100px;
    margin-left: -45px;
    z-index: 1;
  }
  .testi-avatar img {
    width: 100%;
    height: 100%;
    float: left;
    border-radius: 100%;
    border: 6px solid #fff;
    box-shadow: 0 9px 26px rgba(58, 87, 135, 0.1);
    object-fit: cover;
  }
  .leader-level {
    position: absolute;
    right: -5px;
    top: -20px;
  }
  .swiper-slide-active .testimonials-text {
    background: #22a1f5;
    box-shadow: 0 9px 26px rgba(58, 87, 135, 0.1);
  }
  .testimonials-text h3 {
    text-align: center;
  }
  .testimonials-text .username {
    font-family: "Montserrat", sans-serif;
    font-size: 17px;
    margin-top: 8px;
    text-align: center;
    color: #f7ff00;
  }
  .testimonials-text p {
    color: white;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-style: italic;
    line-height: 24px;
    padding-bottom: 10px;
    font-weight: 500;
    text-align: center;
  }

  .swiper-slide-active .testi-item {
    opacity: 1;
    transform: scale(1);
  }
  /* .swiper-pagination {
	position: relative;
  width: 100%;
  height: 100px;
	margin: 0;
  background: yellow;
}
.swiper-pagination-bullet {
	padding: 5px 10px;
	border-radius: 0;
	width: auto;
	height: 30px;
	text-align: center;
	line-height: 30px;
	font-size: 12px;
	color:#000;
	opacity: 1;
	background: rgba(0,0,0,0.2);
}
.swiper-pagination-bullet-active {
	color:#fff;
	background: #007aff;
} */

  /* .tc-pagination.swiper-pagination-bullet,
.tc-pagination2.swiper-pagination-bullet {
  opacity: 1;
  background: #f7ff00;
  margin: 0 2px;
  width: 10px;
  height: 10px;
  transition: all 300ms ease-in-out;
} */

  .leaders-app-download {
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }
  .leaders-app-download img {
    width: 230px;
    margin-top: 5px;
    padding-right: 30px;
  }

  /* custom shape divider starts here */

  .custom-shape-divider-bottom-1644463655 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1644463655 svg {
    position: relative;
    display: block;
    width: calc(124% + 1.3px);
    height: 135px;
  }

  .custom-shape-divider-bottom-1644463655 .shape-fill {
    fill: var(--light-color);
  }

  /* custom shape divider ends here */

  .app-features-two {
    position: relative;
    margin: 4rem auto 0;
  }
  .app-features-two h1 {
    color: #3374ea;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    text-align: center;
  }
  .app-features-two p {
    margin: 30px auto;
    width: 80%;
    color: var(--fourth-color);
    text-align: center;
    font-size: 17px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    line-height: 30px;
  }

  .trade-lessons h1 {
    color: #3374ea;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    text-align: center;
  }

  .trade-lessons p {
    margin: 30px auto;
    width: 80%;
    color: var(--fourth-color);
    text-align: center;
    font-size: 17px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    line-height: 30px;
  }

  .trade-img {
    width: 80%;
    margin-left: 5%;
  }

  .record-img {
    width: 80%;
    margin-left: 8%;
  }
  /* cutom svg shape divider  starts*/
  .auto-sec {
    margin-top: 150px;
    position: relative;
    background-color: #22a1f5;
  }
  .custom-shape-divider-top-1644623960 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1644623960 svg {
    position: relative;
    display: block;
    width: calc(121% + 1.3px);
    height: 133px;
  }

  .custom-shape-divider-top-1644623960 .shape-fill {
    fill: var(--light-color);
  }
  /* shape divider ends here */

  .auto-track {
    padding-top: 150px;
    padding-bottom: 100px;
  }
  .auto-track h1 {
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    text-align: center;
  }
  .auto-track p {
    margin: 30px auto;
    width: 80%;
    color: #ffffff;
    text-align: center;
    font-size: 17px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    line-height: 30px;
  }
  .track-img-box {
    width: 90%;
    margin: 0 auto;
  }
  .auto-track-img {
    width: 100%;
  }

  .button,
  .button::after {
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
  }
  .auto-button {
    margin: 0 auto;
    background: none;
    border: 3px solid #fff;
    border-radius: 40px;
    color: #fff;
    display: block;
    font-size: 1.6em;
    font-weight: bold;
    padding: 10px;
    position: relative;
    text-transform: uppercase;
    cursor: pointer;
  }
  .auto-button::before,
  .auto-button::after {
    background: #fff;
    content: "";
    position: absolute;
    z-index: -1;
  }

  .auto-button:hover {
    background-color: #fff;
    color: #3374ea;
  }
  .littleIcon6 {
    width: 4rem;
    position: absolute;
    left: 170px;
    top: 30px;
    z-index: 1;
  }
  .littleIcon7 {
    width: 4rem;
    position: absolute;
    left: 4%;
    top: 83%;
    z-index: 1;
  }
  .littleIcon8 {
    display: none;
  }
  .roundicon1 {
    width: 2rem;
    position: absolute;
    left: 80%;
    top: 90%;
    z-index: 1;
  }
  .custom-shape-divider-bottom-1644660326 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1644660326 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
  }

  .custom-shape-divider-bottom-1644660326 .shape-fill {
    fill: var(--light-color);
  }

  .profit-loss-sec {
    margin-top: 60px;
    margin-bottom: 30px;
  }
  .profit-loss {
    position: relative;
    width: 95%;
    margin: 0 auto;
  }
  .littleIconS1 {
    position: absolute;
    left: 80%;
    top: 200px;
    width: 4rem;
  }
  .littleIconS2 {
    position: absolute;
    top: 90%;
    width: 4rem;
  }

  .profit-loss h1 {
    text-align: center;
    color: #3374ea;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 32px;
  }
  .Hprofit {
    color: #00be13;
  }
  .Hslash {
    color: #bcbcbc;
  }
  .Hloss {
    color: #ff0000;
  }
  .proft-loss-img-box {
    width: 90%;
    margin: 0 auto;
  }
  .proft-loss-img {
    width: 100%;
  }

  .groupshare {
    display: none;
  }

  /* share */

  .share-portfolio-sec {
    background-color: var(--third-color);
    position: relative;
  }
  .custom-shape-divider-top-1644670257 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1644670257 svg {
    position: relative;
    display: block;
    width: calc(145% + 1.3px);
    height: 112px;
  }

  .custom-shape-divider-top-1644670257 .shape-fill {
    fill: var(--light-color);
    box-shadow: 20px 20px 40px #d6d6d629;
  }

  .share-portfolio {
    padding-top: 110px;
    padding-bottom: 50%;
    margin-bottom: 4rem;
    position: relative;
    box-shadow: 200px;
  }

  .share-portfolio h1 {
    text-align: center;
    color: #3374ea;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 30px;
  }

  .share-blob {
    position: absolute;
    top: 300px;
    width: 100%;
    opacity: 0.8;
    overflow-x: hidden;
  }

  .share-portfolio-img-box {
    width: 90%;
    margin: 0 auto;
  }
  .share-portfolio-img {
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .share-portfolio p {
    margin: 0 auto;
    width: 80%;
    color: var(--fourth-color);
    text-align: center;
    font-size: 17px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    line-height: 30px;
  }

  .custom-shape-divider-bottom-1644669891 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1644669891 svg {
    position: relative;
    display: block;
    width: calc(145% + 1.3px);
    height: 169px;
  }

  .custom-shape-divider-bottom-1644669891 .shape-fill {
    fill: var(--light-color);
  }

  .exchange-sec {
    margin-top: 100px;
    margin-bottom: 140px;
  }
  .exchange-wrapper {
    text-align: center;
  }
  .exchange-wrapper h1 {
    width: 80%;
    margin: 0 auto 50px;
    text-align: center;
    color: #3374ea;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 32px;
  }
  .get-details {
    width: 80%;
    margin: 50px auto 0;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
  }
  .exchange-box-wrapper {
    margin: 5px auto;
    display: inline-block;
    text-align: center;
  }
  .exchange-box {
    margin-left: 15px;
    width: 101px;
    height: 125px;
    background: var(--third-color) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000008;
    border-radius: 20px;
    opacity: 1;
    vertical-align: middle;
  }

  .exchange-logo {
    /* margin-top: 12px; */
    /* margin-left: 6px; */
    width: 60px;
    height: 90px;
  }
  .exchange-logo.min {
    width: 110px;
    margin-left: -5px;
  }

  .exchange-box p {
    /* display: none; */
    color: var(--fourth-color);
    text-align: center;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
  }

  .exchange-download-wrapper {
    text-align: center;
    margin-top: 2.5rem;
  }
  .exchange-download {
    display: block;
    width: 45%;
    margin: 0 auto;
    margin-top: 50px;
  }

  .users-review {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  .users-review h1 {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    letter-spacing: 0px;
    color: #3374ea;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 32px;
    text-transform: capitalize;
  }
  .user-review-box {
    width: 80%;
    margin: 30px auto;
    padding: 0 20px 20px;
    background: var(--third-color) 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 17px #1c192305;
    border-radius: 20px;
    opacity: 1;
    text-align: center;
    position: relative;
  }
  .user-review-box h3 {
    margin: 30px 0;
    text-align: center;
    color: #3374ea;
    font-family: "Montserrat", sans-serif;
  }

  .users-img-wrapper {
    position: relative;
    top: 0px;
    height: 90px;
    width: 90px;
    margin: auto;
    border: 8px solid #22a1f5;
    border-radius: 50%;
    overflow: hidden;
  }
  .users-img-wrapper img {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    transition: 0.3s ease;
  }

  .star-review {
    margin-top: 20px;
  }
  .user-review-box p {
    margin: 20px 0;
    color: var(--fourth-color);
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    font-family: "Montserrat", sans-serif;
  }

  .splide__arrow {
    background-color: #3374ea;
    /* position: relative; */
    display: none;
  }
  .splide__arrows button {
    color: white;
  }
  .splide .splide__arrows {
    position: absolute;
    top: 60%;
  }
  .splide__arrows .splide__arrow--prev {
    left: -30px;
  }
  .splide__arrows .splide__arrow--next {
    left: 120%;
  }
  .splide .splide__pagination {
    position: relative;
    top: 10px;
    text-align: center;
  }
  .splide__pagination__page {
    background-color: #00be13;
  }
  .splide__pagination__page.is-active {
    background-color: blue;
  }

  .users-CTA {
    text-align: center;
    width: 80%;
    margin: 0 auto;
    font-family: "Montserrat", sans-serif;
  }

  .get-details-review {
    width: 80%;
    margin: 50px auto 0;
    text-align: center;
    font-family: "Montserrat", sans-serif;
  }

  .learn-more {
    display: none;
    position: relative;
    width: 90%;
    margin: 10rem auto 0;
  }

  @media (min-width: 1200px) {
    .learn-more {
      margin: 4rem auto 0;
    }
  }

  .learn-more h1 {
    margin: 0 auto;
    text-align: center;
    color: #3374ea;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 32px;
  }

  .learn-more p {
    margin: 20px 0;
    padding: 10px 20px;
    color: var(--fourth-color);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    line-height: 25px;
  }
  .learn-moreBTN {
    position: relative;
    margin-top: 10px;
    margin-left: 20%;
    background-color: #fff;
    border: none;
    border-radius: 50px;
    color: #3374ea;
    font-family: "Montserrat", sans-serif;
    padding: 15px 32px; /* padding on ipad needs adjustmetns*/
    text-align: center;
    text-decoration: none;
    font-size: 19px;
    font-weight: 700;
    cursor: pointer;
  }

  .vid-play {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    background: linear-gradient(to right, #fdfffefb, #a5d872e3);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    z-index: 1;
    cursor: pointer;
    animation: pulse 2s infinite;
    box-shadow: 0 0 0px rgba(121, 113, 113, 0.061);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(153, 160, 141, 0.897);
    }
    50% {
      box-shadow: 0 0 0 0 rgba(223, 236, 29, 0.815);
    }
    100% {
      box-shadow: 0 0 0 30px rgba(168, 172, 118, 0.726);
    }
  }
  .vid-play i {
    position: absolute;
    color: #3374ea;
    font-size: 40px;
    cursor: pointer;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .vid-play-wrapper {
    margin: 20px auto;
    width: 100%;
    height: 300px;
    background: url("../assets/images/video-background.jpeg") no-repeat center
      center fixed;
    box-shadow: 0px 30px 20px #22a1f51a;
    border-radius: 23px;
    opacity: 1;
  }

  .video-img {
    width: 100%;
    height: 300px;
    position: absolute;
    background: linear-gradient(180deg, #75e7ff 0%, #677bff 100%) 0% 0%
      no-repeat padding-box;
    border-radius: 23px;
    opacity: 0.9;
    transition: 1s ease-out;
  }

  .video-modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #000;
    z-index: 20;
    display: grid;
    place-items: center;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease-in;
  }

  .video-modal.showmodal {
    visibility: visible;
    opacity: 1;
    pointer-events: all;
  }

  .modal-container {
    width: 100%;
    max-width: 800px;
    padding: 20px;
    position: relative;
  }

  .vid-close {
    width: 80px;
    height: 80px;
    z-index: 120;
    cursor: pointer;
    position: absolute;
    /* top: -40px;
  left: 270px; */

    left: 80%;
    top: 4%;
    transform: translate(-50%, -50%);
  }
  .vid-close svg {
    float: right;
    width: 20px;
    height: 30px;
    fill: #fff;
  }

  .iframe-container {
    position: relative;
    width: 95%;
    padding-top: 50%;
  }

  .iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  /* code for FAQ SECTION */
  .faq-wrapper {
    max-width: 90%;
    margin: 30px auto;
  }
  .faqcontainer {
    width: 100%;
    margin: auto;
  }
  .faq-wrapper h1 {
    text-align: center;
    color: #3374ea;
    margin-bottom: 50px;
    font-family: "Montserrat", sans-serif;
  }
  .faqwrapper {
    background-color: var(--third-color);
    margin-bottom: 20px;
    padding: 15px 30px;
    border-radius: 5px;
    box-shadow: 0px 20px 17px #1c192305;
  }
  .faqtoggle,
  .faqcontent {
    font-family: "Montserrat", sans-serif;
  }
  .faqwrapper h3 {
    color: #3374ea;
  }
  .faqtoggle {
    width: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: #111130;
    font-weight: 500;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 15px 0;
    text-align: left;
  }

  .faqcontent {
    color: var(--dark-color);
    position: relative;
    font-size: 16px;
    text-align: left;
    line-height: 30px;
    height: 0;
    overflow: hidden;
    transition: all 1s;
  }

  /* FAQ ENDS HERE */

  @media only screen and (min-width: 700px) {
    .littleicon1 {
      position: absolute;
      top: 200px;
      left: 10px;
      width: 3rem;
    }

    .littleicon2 {
      position: absolute;
      top: 550px;
      left: 10px;
      width: 3rem;
    }

    .littleicon3 {
      position: absolute;
      top: 350px;
      left: 650px;
      width: 3rem;
    }
    .littleicon4 {
      position: absolute;
      top: 650px;
      left: 650px;
      width: 3rem;
    }
    .first-page {
      margin-bottom: 20rem;
    }
    .blob-wrapper {
      width: 100%;
      height: 900px;
      background: #22a1f5;
      border-radius: 10%;
      -moz-border-radius: 10%;
      -webkit-border-radius: 10%;
    }
    .blob1 {
      object-fit: cover;
      position: relative;
      top: -20rem;
      margin-left: -4rem;
      height: auto;
      max-width: 98rem;
      display: none;
    }
    .about {
      position: absolute;
      top: 220px;
      width: 100%;
      margin: 0px auto;
    }
    .slideshow-container p {
      width: 50%;
    }

    .app-downloads {
      position: relative;
      margin: 2rem auto 0;
      width: 100%;
    }
    .app-download {
      display: inline-block;
      width: 30%;
      margin-top: 10px;
      margin-right: 10px;
    }

    .appui {
      width: 50%;
    }
    @media only screen and (min-width: 950px) {
      .app-download {
        display: inline-block;
        width: 20%;
        margin-top: 10px;
        margin-right: 10px;
      }
      .appui {
        width: 40%;
      }
    }
    .review-box {
      text-align: center;
    }
    .box {
      width: 40%;
      display: inline-block;
      margin-right: 10px;
      vertical-align: middle;
    }
    .littleicon5 {
      display: none;
    }
    .app-features {
      margin-top: 1rem;
    }

    .app-features h1 {
      margin-bottom: 50px;
    }
    .copy-traders {
      margin: -20px auto 10px;
    }

    .signal-blob {
      left: 20%;
      height: 70rem;
    }
  }

  /* START IPAD PRO SCREEN SIZE DESIGN */

  @media only screen and (min-width: 1024px) {
    .mainContainer {
      padding-top: 7rem;
    }
    .littleicon1 {
      position: absolute;
      top: 110px;
      left: 910px;
      width: 3rem;
    }

    .littleicon2 {
      position: absolute;
      top: 620px;
      left: 900px;
      width: 3rem;
    }

    .littleicon3 {
      position: absolute;
      top: 350px;
      left: 610px;
      width: 3rem;
    }
    .littleicon4 {
      position: absolute;
      top: 650px;
      left: 10px;
      width: 4rem;
    }
    .first-page {
      margin-bottom: 3rem;
    }
    .blob-wrapper {
      height: 750px;
      position: relative;
      top: -100px;
      overflow-x: hidden;
      background: unset;
      border-radius: unset;
      -moz-border-radius: unset;
      -webkit-border-radius: unset;
    }
    .blob1 {
      display: none;
    }
    .blob1-d {
      display: block;
      object-fit: cover;
      position: absolute;
      top: -12.5rem;
      left: 38%;
      height: 1100.33px;
      width: 1000.04px;
      transform: translateY(27px);
    }
    .background-svg {
      display: block;
      position: absolute;
      top: 120px;
      left: 87px;
      width: 40%;
      opacity: 0.06;
    }
    .about {
      top: 140px;
      left: 4rem;
      width: 50%;
    }
    .about h1 {
      font-family: "Montserrat", sans-serif;
      text-align: left;
      margin: 10px 0;
      color: #3374ea;
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: 0;
    }
    .slideshow-container p {
      font-weight: unset;
      width: 60%;
      color: var(--fourth-color);
      font-size: 1rem;
      font-family: "Montserrat", sans-serif;
      text-align: left;
      margin: 10px 0;
    }

    .app-downloads {
      margin-top: 2rem;
      text-align: left;
      width: 100%;
    }
    .app-download {
      display: inline-block;
      width: 30%;
      margin: 10px auto;
    }
    .main-appUI_wrapper {
      float: left;
      width: 60%;
    }
    .appui {
      position: absolute;
      top: -25rem;
      left: 40rem;
      width: 90%;
    }
    .review-section {
      top: 0;
    }
    .review-section h1 {
      font-size: 30px;
    }
    .review-box {
      width: 100%;
      /* margin-left: 20px; */
      text-align: center;
    }
    .box {
      width: 350px;
      background: var(--third-color) 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000008;
      display: inline-block;
      margin: 20px 10px 70px;
      font-family: "Montserrat", sans-serif;
      border-radius: 10px;
    }

    .box-img {
      position: relative;
      top: -60px;
      height: 148px;
      width: 148px;
      margin: auto;
      border: 8px solid var(--light-color);
      border-radius: 50%;
      overflow: hidden;
    }

    .app-features {
      height: 1100px;
      position: relative;
      padding-top: 0;
      width: 80%;
      margin: auto;
    }

    .app-features h1 {
      color: #3374ea;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 40px;
      text-align: center;
    }
    .app-features p {
      color: var(--fourth-color);
      text-align: center;
      font-size: 30px;
      font-weight: 400;
      font-family: "Montserrat", sans-serif;
      margin-top: 50px;
      line-height: 50px;
    }

    .copy-traders,
    .see-leaders,
    .get-signal {
      margin: 30px auto 60px;
    }

    .copy-img {
      width: 70%;
      margin: 0 auto;
    }
    .littleicon5 {
      display: none;
    }
    .get-signal {
      position: relative;
      top: 85rem;
    }

    .get-signal h1 {
      color: #3374ea;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 40px;
      width: 80%;
      margin: 0 auto;
    }

    .signal-details {
      top: 100px;
      font-size: 30px;
      line-height: 50px;
    }

    .blob-signal-wrapper {
      position: absolute;
      top: 20px;
      z-index: -1;
      width: 100%;
      overflow-x: hidden;
    }

    .signal-blob {
      position: relative;
      top: -3rem;
      left: 50px;
      width: 1415px;
      height: 1300px;
    }

    .signal-packs {
      position: absolute;
      top: 30%;
      left: 700px;
    }
    .signal-packs.two {
      position: absolute;
      top: 50%;
      left: 50%;
    }

    .signal-packs.three {
      position: absolute;
      top: 50%;
      left: 80%;
    }

    .pack-img {
      width: 80%;
      margin-top: 16px;
      margin-left: 20px;
    }

    .main-signal-img {
      position: relative;
      top: -530px;
      left: 600px;
    }

    .signal-planner-wrapper {
      position: relative;
      top: 120;
      left: 40px;
      width: 80%;
    }

    .signal-planner {
      width: 70%;
    }
    .meet-leaders {
      margin-top: 100rem;
    }
    .meet-leaders h1 {
      width: 90%;
      margin: 0 auto;
      color: var(--light-color);
      text-align: center;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      font-size: 40px;
    }
    .leader-level {
      position: absolute;
      right: -30px;
      top: -20px;
      z-index: 2;
    }
    .leaders-p {
      width: 60%;
      margin: 10px auto 0;
      font-size: 20px;
    }
    .section-title p {
      width: 40%;
      margin: 0 auto;
    }
    .swiper-container {
      width: 80%;
    }
    .listing-carousel-button {
      position: absolute;
      top: 50%;
    }
    .auto-track h1 {
      width: 60%;
      margin: 0 auto;
    }
    .auto-track-img {
      width: 80%;
      margin-left: 13%;
    }
    .auto-track-icons.bcs1 {
      width: 30%;
      top: 18%;
      left: 70%;
    }

    .auto-track-icons.eth1 {
      width: 30%;
      top: 260px;
      left: 20px;
    }

    .profit-loss h1 {
      width: 60%;
      margin: 0 auto;
      text-align: center;
      color: #3374ea;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 48px;
    }

    .proft-loss-img-box {
      width: 90%;
      margin: 0 auto;
    }
    .proft-loss-img {
      width: 80%;
      margin-left: 70px;
    }
    .share-portfolio {
      padding-bottom: 30%;
    }

    .share-portfolio h1 {
      width: 60%;
      margin: 0 auto;
      text-align: center;
      color: #3374ea;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 48px;
    }

    .share-blob {
      position: absolute;
      top: 330px;
      left: 90px;
      width: 800px;
      height: 900px;
    }
    .share-portfolio-box {
      width: 90%;
      margin: 0 auto;
    }
    .share-portfolio-img {
      width: 75%;
      left: 0;
      margin-left: 160px;
    }
    .share-portfolio p {
      margin: 0 auto;
      width: 80%;
      color: var(--fourth-color);
      text-align: center;
      font-size: 26px;
      font-family: "Montserrat", sans-serif;
      line-height: 50px;
    }
    .exchange-sec {
      text-align: center;
      width: 90%;
      margin: 100px auto 200px;
    }
    .exchange-wrapper h1 {
      width: 80%;
      margin: 0 auto 1rem;
      text-align: center;
      color: #3374ea;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 42px;
    }
    .exchange-box {
      margin: 20px 1rem 0;
      width: 200px;
      height: 160px;
      background: var(--third-color) 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000008;
      border-radius: 20px;
      opacity: 1;
    }

    .exchange-logo {
      margin-top: 10px;
      margin-left: 10px;
      width: 95px;
      height: 95px;
    }
    .exchange-download-wrapper {
      margin-top: 2.5rem;
    }
    .exchange-download {
      display: inline-block;
      width: 30%;
      margin-top: 10px;
      margin-left: 1.5rem;
    }
    .exchange-box p {
      display: block;
      padding-top: 10px;
      color: var(--fourth-color);
      text-align: center;
      font-size: 14px;
      font-family: "Montserrat", sans-serif;
    }

    .user-review-box {
      padding: 40px 3px 0;
      margin: 30px auto;
      background: var(--third-color) 0% 0% no-repeat padding-box;
      box-shadow: 0px 20px 17px #1c192305;
      border-radius: 20px;
      opacity: 1;
      text-align: center;
    }

    .user-review-box p {
      margin: 20px 0;
      padding: 20px;
      color: var(--fourth-color);
      text-align: center;
      font-size: 20px;
      font-family: "Montserrat", sans-serif;
    }

    .user-review-box h3 {
      margin: 20px 0;
    }
    .splide .splide__arrows {
      position: absolute;
      /* top: 210px; */
    }
    .splide__arrows .splide__arrow--prev {
      left: -10px;
    }
    .splide__arrows .splide__arrow--next {
      left: 780px;
    }

    .users-CTA {
      font-size: 20px;
    }
    .users-img-wrapper {
      position: relative;
      top: 0px;
      height: 90px;
      width: 90px;
      margin: auto;
      border: 8px solid #22a1f5;
      border-radius: 50%;
      overflow: hidden;
    }

    .learn-more {
      height: 400px;
      margin-bottom: 8rem;
    }
    .learn-more h1 {
      margin: 10% auto 0;
      text-align: center;
      color: #3374ea;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 32px;
      float: left;
      width: 35%;
    }

    .vid-play {
      position: absolute;
      left: 75%;
      top: 78%;
      transform: translate(-50%, -50%);
    }

    .vid-play-wrapper {
      float: right;
      margin: 20px auto;
      width: 500px;
      height: 300px;
      box-shadow: 0px 30px 20px #22a1f51a;
      border-radius: 23px;
      opacity: 1;
    }

    .video-img {
      width: 500px;
      height: 300px;
      position: absolute;
      background: linear-gradient(180deg, #75e7ff 0%, #677bff 100%) 0% 0%
        no-repeat padding-box;
      border-radius: 23px;
      opacity: 1;
      transition: 1s ease-out;
    }
    .video-img:hover {
      opacity: 0;
    }

    .learn-more h1 {
      width: 50%;
      text-align: left;
      margin-left: 19px;
    }

    .learn-more p {
      float: left;
      width: 40%;
      color: var(--fourth-color);
      text-align: left;
      font-size: 16px;
      font-weight: 500;
      font-family: "Montserrat", sans-serif;
      margin-top: 20px;
    }
    .learn-moreBTN {
      position: relative;
      margin-top: 10px;
      margin-right: 10%;
      margin-left: unset;
      background-color: var(--third-color);
      padding: 15px 20px;
      text-align: center;
      font-size: 19px;
      font-weight: 700;
      width: 30%;
      float: left;
    }
    .learn-moreBTN:hover {
      background-color: #3374ea;
      color: var(--fourth-color);
    }
    .faq-wrapper {
      margin-top: 120px;
    }
  }
  /* START COMPUTER SCREEN DESIGN */
  @media only screen and (min-width: 1200px) {
    .littleicon1 {
      position: absolute;
      /* top: 200px; */
      left: 90%;
      width: 10%;
    }

    .littleicon2 {
      position: absolute;
      top: 60%;
      left: 70%;
      width: 10%;
    }

    .littleicon3 {
      position: absolute;
      top: 20%;
      left: 60%;
      width: 10%;
    }
    .littleicon4 {
      position: absolute;
      top: 50%;
      left: 10%;
      width: 10%;
    }
    .first-page {
      margin-bottom: 1rem;
    }
    .blob-wrapper {
      height: 1100px;
      position: relative;
      top: -7.6rem;
      overflow-x: hidden;
    }

    .blob1-d {
      object-fit: cover;
      top: -13rem;
      left: 52%;
      height: 1200.33px;
      width: 62rem;
      transform: translateY(27px);
      z-index: -1;
    }

    @media (min-width: 1430px) {
      .blob1-d {
        top: -13rem;
        left: 53%;
      }
    }
    @media (min-width: 1440px) {
      .blob1-d {
        left: 54%;
      }
    }

    .background-svg {
      display: block;
      position: absolute;
      top: 120px;
      left: 87px;
      width: 35%;
    }
    .about {
      left: 140px;
      width: 50%;
      top: 180px;
    }
    .about h1 {
      width: 100%;
      font-family: "Montserrat", sans-serif;
      text-align: left;
      margin: 7px 0;
      color: #3374ea;
      font-size: 2.5rem;
      font-weight: 800;
      letter-spacing: 0;
      line-height: 50px;
    }
    .slideshow-container p {
      width: 60%;
      font-size: 1rem;
      font-family: "Montserrat", sans-serif;
      margin-top: 20px;
      margin-bottom: 0;
    }
    .app-downloads {
      margin-top: 2rem;
      margin-left: 0;
    }
    .app-download {
      display: inline-block;
      width: 30%;
      margin: 0 auto;
      margin-right: 1rem;
    }
    .appui {
      position: absolute;
      top: -28rem;
      width: 90%;
      margin-left: 30%;
    }
    @media (min-width: 1440px) {
      .appui {
        width: 86%;
        top: -31rem;
        margin-left: 48%;
      }
    }
    .review-section {
      top: -200px;
      margin-bottom: 30px;
    }
    .review-section h1 {
      width: 60%;
      margin: 0 auto;
    }
    .review-box {
      margin-top: 60px auto 0;
      text-align: center;
      display: flex;
      flex: wrap;
      justify-content: center;
    }
    .box {
      width: 340px;
      background: var(--third-color) 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000008;
      display: block;
      margin: 60px 9px 20px;
      font-family: "Montserrat", sans-serif;
      border-radius: 10px;
    }

    .box-img {
      position: relative;
      top: -60px;
      height: 150px;
      width: 150px;
      margin: auto;
      border: 8px solid var(--light-color);
      border-radius: 50%;
      overflow: hidden;
    }
    .review-img {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      border-radius: 50%;
      object-fit: cover;
      transition: 0.3s ease;
    }
    .review-section .star {
      text-align: center;
      margin-top: -2rem;
      margin-bottom: 2px;
    }

    .box h3 {
      text-align: center;
    }
    .box p {
      color: var(--fourth-color);
      font-weight: 400;
    }
    .app-features {
      height: 1100px;
      position: relative;
      padding-top: 0;
      width: 80%;
      margin: auto;
    }

    .app-features h1 {
      color: #3374ea;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 40px;
      text-align: center;
      margin-top: 90px;
    }
    .app-features p {
      color: var(--fourth-color);
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      font-family: "Montserrat", sans-serif;
      line-height: 30px;
    }

    .copy-img-box {
      width: 80%;
    }
    .copy-img {
      width: 50%;
      margin: 0 auto;
      transition: 0.3s ease;
    }
    .copy-img:hover {
      filter: saturate(140%);
      transform: scale(0.9);
    }
    .copy-traders {
      margin-bottom: 150px;
      padding-top: 80px;
    }
    .copy-traders h1 {
      width: 600px;
      text-align: left;
    }
    .copy-traders p {
      width: 31.2rem;
      text-align: left;
    }
    .copy-traders .copy-img {
      position: absolute;
      top: 20px;
      left: 600px;
    }
    .see-leaders {
      position: relative;
      padding-top: 300px;
    }
    .see-leaders h1 {
      margin-top: 0;
      width: 403px;
      float: right;
      text-align: left;
    }
    .see-leaders p {
      width: 30rem;
      position: absolute;
      top: 140%;
      left: 60%;
      float: right;
      text-align: left;
      width: 40%;
    }
    @media (min-width: 1400px) {
      .see-leaders p {
        top: 140%;
        left: 65%;
      }
    }

    .see-leaders .copy-img {
      width: 50%;
      position: absolute;
      top: 200px;
      left: 0;
    }
    .get-signal {
      position: relative;
      top: 17rem;
    }
    .dollarsvg {
      top: 70%;
      left: 25%;
    }
    .get-signal h1 {
      color: #3374ea;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 38px;
      width: 40%;
      position: absolute;
      top: 290px;
      left: 140px;
      text-align: left;
    }

    .signal-details {
      width: 30%;
      position: absolute;
      top: 450px;
      left: 140px;
      text-align: left;
      color: var(--fourth-color);
      font-size: 14px;
      font-weight: 500;
      font-family: "Montserrat", sans-serif;
      line-height: 30px;
    }

    .blob-signal-wrapper {
      position: absolute;
      top: 40px;
      z-index: -1;
      width: 100%;
      overflow-x: hidden;
    }

    .signal-blob {
      position: relative;
      top: -2rem;
      left: 700px;
      width: 1000px;
      height: 1000px;
    }

    .signal-packs {
      position: absolute;
      top: 190px;
      left: 78%;
    }
    .signal-packs.two {
      position: absolute;
      top: 37%;
      left: 73%;
    }

    .signal-packs.three {
      position: absolute;
      top: 38%;
      left: 86%;
    }

    .pack-img {
      width: 80%;
    }

    @media (min-width: 1440px) {
      .signal-packs {
        position: absolute;
        top: 190px;
        left: 80%;
      }
      .signal-packs.two {
        position: absolute;
        top: 38%;
        left: 75%;
      }

      .signal-packs.three {
        position: absolute;
        top: 38%;
        left: 86%;
      }

      .pack-img {
        width: 70%;
      }
    }

    .main-signal-wrapper {
      display: block;
      position: relative;
      top: 25rem;
      left: 32%;
      width: 30%;
    }
    .main-signal-img {
      width: 60%;
    }

    .signal-planner-wrapper {
      position: relative;
      top: 10rem;
      left: 670px;
      width: 30%;
    }

    .signal-planner {
      width: 100%;
      transition: 00.3s ease-out;
    }
    @media (min-width: 1440px) {
      .main-signal-img {
        width: 50%;
        margin-left: 5rem;
      }
      .signal-planner {
        margin-left: 5rem;
      }
    }
    .signal-planner:hover {
      filter: saturate(140%);
      transform: scale(0.9);
    }

    .meet-leaders {
      z-index: 2;
      margin-top: 20rem;
    }

    .swiper-container {
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
    }
    .swiper-wrapper {
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }
    .listing-carousel-button {
      position: absolute;
      top: 50%;
    }
    .leader-level {
      position: absolute;
      right: 10%;
      top: -2%;
    }
    .leader-level img {
      width: 4rem;
    }
    .testimonials-text {
      padding: 5rem 1rem 3rem;
      overflow: hidden;
      background: #22a1f5;
      box-shadow: 0 9px 26px rgba(58, 87, 135, 0.1);
      border-radius: 10px;
      transition: all 0.3s ease-in-out;
      width: 100%;
      margin: 0 auto;
    }

    .app-features-two {
      width: 90%;
      position: relative;
      margin-top: 200px;
      margin: 4rem auto 0;
    }

    .app-features-two h1 {
      color: #3374ea;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 2.5rem;
      width: 40%;
      float: right;
      text-align: left;
      margin-top: 8%;
    }
    .app-features-two p {
      color: var(--fourth-color);
      margin-top: -320px;
      text-align: left;
      font-size: 14px;
      font-weight: 500;
      font-family: "Montserrat", sans-serif;
      width: 40%;
      float: right;
      line-height: 30px;
    }

    .trade-img-box {
      width: 70%;
    }

    .trade-img {
      margin-left: 100px;
      width: 50%;
      transition: 0.3s ease;
    }
    .trade-img:hover {
      filter: saturate(140%);
      transform: scale(0.9);
    }

    .trade-lessons {
      width: 80%;
      margin: 0 auto;
    }
    .trade-lessons h1 {
      color: #3374ea;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 40px;
      width: 40%;
      float: left;
      margin-top: 150px;
      text-align: left;
    }
    .trade-lessons p {
      color: var(--fourth-color);
      margin-top: 20px;
      text-align: left;
      font-size: 14px;
      font-weight: 500;
      font-family: "Montserrat", sans-serif;
      width: 40%;
      float: left;
      line-height: 30px;
    }
    .record-img-box {
      float: right;
      width: 60%;
    }
    .record-img {
      margin-left: 200px;
      margin-top: 60px;
      width: 75%;
      transition: 0.3s ease;
    }
    .record-img:hover {
      filter: saturate(140%);
      transform: scale(0.9);
    }

    .auto-sec {
      margin-top: 800px;
      position: relative;
      background-color: #22a1f5;
    }
    .auto-track {
      padding-top: 250px;
      padding-bottom: 30%;
    }

    .auto-track h1 {
      width: 50%;
      margin: 0;
      margin-left: 90px;
      color: #ffffff;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      text-align: left;
      font-size: 2.5rem;
    }
    .auto-track p {
      margin: 30px 0;
      width: 30%;
      margin-left: 90px;
      color: #ffffff;
      text-align: left;
      font-size: 14px;
      font-weight: 500;
      font-family: "Montserrat", sans-serif;
      line-height: 25px;
    }
    .track-img-box {
      width: 50%;
      position: absolute;
      top: 20%;
      left: 500px;
    }
    .auto-track-img {
      width: 700px;

      /* margin-left: 270px; */
    }

    .littleIcon6 {
      width: 5%;
      position: absolute;
      left: 50%;
      top: 95%;
    }
    .littleIcon8 {
      display: block;
      width: 2%;
      position: absolute;
      left: 15%;
      top: 5%;
    }
    .roundicon1 {
      width: 3rem;
      position: absolute;
      left: 80%;
      top: 2%;
      z-index: 1;
    }
    .auto-button {
      margin-left: 90px;
      background: none;
      border: 3px solid #fff;
      border-radius: 40px;
      color: #fff;
      display: block;
      font-size: 20px;
      font-weight: bold;
      padding: 10px;
      position: relative;
      text-transform: uppercase;
    }
    .profit-loss-sec {
      position: relative;
    }
    .littleIconS1 {
      position: absolute;
      width: 5rem;
      left: 5%;
    }
    .littleIconS2 {
      position: absolute;
      left: 80%;
      top: 70%;
      width: 5rem;
    }
    .proft-loss-img-box {
      width: 60%;
      margin: 0 auto;
    }
    .proft-loss-img {
      width: 50%;
      margin-left: 150px;
    }

    .groupshare {
      display: block;
      position: absolute;
    }
    .groupshare.geth1 {
      width: 20%;
      top: 200px;
      margin-left: -60px;
    }
    .groupshare.gbsc1 {
      width: 20%;
      top: 240px;
      margin-left: 420px;
    }

    .groupshare.gbsc2 {
      width: 20%;
      top: 400px;
      margin-left: -50px;
    }
    .groupshare.geth2 {
      width: 20%;
      top: 480px;
      margin-left: 420px;
    }

    /* .. */
    .share-portfolio {
      padding-top: 300px;
      padding-bottom: 35%;
    }

    .share-portfolio h1 {
      color: #3374ea;
      font-family: "Montserrat", sans-serif;
      font-weight: bolder;
      font-size: 48px;
      width: 40%;
      margin-left: 120px;
      text-align: left;
    }
    .share-portfolio p {
      color: var(--fourth-color);
      margin-top: 20px;
      margin-left: 120px;
      text-align: left;
      font-size: 14px;
      font-weight: 500;
      font-family: "Montserrat", sans-serif;
      width: 35%;
      float: left;
      line-height: 30px;
    }

    .share-blob {
      position: absolute;
      top: 200px;
      left: 700px;
      width: 500px;
      height: 500px;
      /* margin-left: 200px; */
    }
    .share-portfolio-box {
      width: 50%;
      position: absolute;
      top: 100px;
      left: 500px;
    }
    .share-portfolio-img {
      width: 60%;
      margin-left: 270px;
    }
    .share-portfolio-img:hover {
      filter: saturate(140%);
      transform: scale(0.9);
    }
    .exchange-sec {
      width: 80%;
      margin-top: 100px;
      margin-bottom: 200px;
    }
    .exchange-wrapper h1 {
      width: 60%;
      margin: 0 auto 30px;
      text-align: center;
      color: #3374ea;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 42px;
    }
    .exchange-box {
      margin: 10px 10px;
      width: 180px;
      height: 120px;
      background: var(--third-color) 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000008;
      border-radius: 20px;
      opacity: 1;
    }

    .exchange-logo {
      margin-top: 10px;
      width: 50px;
      height: 60px;
    }

    .exchange-box:hover {
      filter: saturate(140%);
      transform: scale(0.9);
    }
    .exchange-download-wrapper {
      margin-top: 2.5rem;
    }
    .exchange-download {
      display: inline-block;
      width: 20%;
      margin-top: 10px;
    }
    .exchange-box p {
      padding-top: 3px;
      color: var(--dark-color);
      text-align: center;
      font-size: 16px;
      font-family: "Montserrat", sans-serif;
    }
    .users-review {
      width: 100%;
      height: 800px;
      margin: 0 auto;
    }
    .users-review h1 {
      width: 80%;
      margin: 0 auto;
      text-align: center;
      letter-spacing: 0px;
      color: #3374ea;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 42px;
      text-transform: capitalize;
      opacity: 1;
    }
    .user-review-box {
      margin: 30px auto;
      padding: 20px 0;
      background: var(--third-color) 0% 0% no-repeat padding-box;
      box-shadow: 0px 20px 17px #1c192305;
      border-radius: 20px;
      opacity: 1;
    }

    .user-review-box p {
      margin: 10px 0;
      padding: 20px;
      color: var(--fourth-color);
      text-align: center;
      font-size: 16px;
      font-family: "Montserrat", sans-serif;
    }

    .user-review-box h3 {
      margin: 20px 0;
    }

    /* Start of splide js file */
    .splide .splide__arrows {
      position: absolute;
      /* top: 140px; */
    }
    .splide__arrows .splide__arrow--prev {
      left: -12px;
    }
    .splide__arrows .splide__arrow--next {
      left: 785px;
    }

    /* End of splide js file */
    .review-download-wrapper {
      margin: 2.5rem 30rem 0;
    }
    .users-CTA {
      font-size: 16px;
    }
    .review-download {
      display: inline-block;
      width: 40%;
      display: inline-block;
      margin: 10px 15px;
    }

    .vid-play-wrapper {
      float: right;
      margin: 20px auto;
      width: 500px;
      height: 380px;
      box-shadow: 0px 30px 20px #22a1f51a;
      border-radius: 23px;
      opacity: 1;
    }

    .video-img {
      width: 500px;
      height: 380px;
      position: absolute;
      background: linear-gradient(180deg, #75e7ff 0%, #677bff 100%) 0% 0%
        no-repeat padding-box;
      border-radius: 23px;
      opacity: 0.9;
      transition: 1s ease-out;
    }

    .learn-more p {
      float: left;
      width: 40%;
      color: var(--fourth-color);
      text-align: left;
      font-size: 14px;
      font-weight: 500;
      font-family: "Montserrat", sans-serif;
      margin-top: 20px;
      line-height: 25px;
    }

    .faq-wrapper {
      position: relative;
      max-width: 100%;
      margin: 30px auto;
    }

    .faqcontainer {
      width: 40%;
      margin-left: 90px;
      display: inline-block;
      vertical-align: middle;
    }

    .faq-wrapper h1 {
      text-align: center;
      color: #3374ea;
      margin-bottom: 50px;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 42px;
    }

    .faqwrapper {
      background-color: var(--third-color);
      margin-bottom: 20px;
      padding: 10px 30px;
      border-radius: 20px;
      box-shadow: 0px 20px 17px #1c192305;
    }
    .faqtoggle,
    .faqcontent {
      font-family: "Montserrat", sans-serif;
    }
    .faqtoggle {
      width: 100%;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      color: #22a1f5;
      font-weight: bold;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 15px 0;
      text-align: left;
    }
    .faqcontent {
      position: relative;
      font-size: 16px;
      text-align: left;
      line-height: 30px;
      height: 0;
      overflow: hidden;
      transition: all 1s;
    }

    .mobilefooter {
      display: none;
    }
  }
</style>
