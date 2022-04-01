<template>
     <div class="faq-wrapper">

        <h1>FAQ</h1>
        <div class="faqcontainer">
            <div class="faqwrapper">
                <button class="faqtoggle">
                    <h3>I’m New To Crypto. Who Should I Subscribe To?</h3>
                    <i class="fa fa-chevron-down faqicon" style="color: #3374EA;"></i>
                </button>
                <div class="faqcontent">
                    <p>We are working on adding rating and analytics systems to the CoinProfit app so it will be easier for you to see the track records of all the leaders. In the meantime, we encourage you to subscribe to only leaders you know and trust. If you are completely new and don’t know any leader, your best bet will be to subscribe to our CEO and Founder - Emmanuel Ohworeko. Or any of the leaders featured on our website on the leader's page
</p>
                </div>
            </div>
            <div class="faqwrapper">
                <button class="faqtoggle">
                    <h3>What is the return policy?</h3>
                    <i class="fa fa-chevron-down faqicon" style="color: #3374EA;"></i>
                </button>
                <div class="faqcontent">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquam facere adipisci quod mollitia, aut nemo deleniti fugiat et, corrupti sequi. Omnis dolorem quos eligendi placeat soluta sint corrupti quod.</p>
                </div>
            </div>
            <div class="faqwrapper">
                <button class="faqtoggle">
                    <h3>Question 3</h3>
                    <i class="fa fa-chevron-down faqicon" style="color: #3374EA;"></i>
                </button>
                <div class="faqcontent">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquam facere adipisci quod mollitia, aut nemo deleniti fugiat et, corrupti sequi. Omnis dolorem quos eligendi placeat soluta sint corrupti quod.</p>
                </div>
            </div>
        </div>
        <div class="faqcontainer faqtwo">
            <div class="faqwrapper">
                <button class="faqtoggle">
                   <h3>Queston 4</h3>
                   <i class="fa fa-chevron-down faqicon" style="color: #3374EA;"></i>
                </button>
                <div class="faqcontent">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquam facere adipisci quod mollitia, aut nemo deleniti fugiat et, corrupti sequi. Omnis dolorem quos eligendi placeat soluta sint corrupti quod.</p>
                </div>
            </div>
            <div class="faqwrapper">
                <button class="faqtoggle">
                    <h3>Question 5</h3>
                    <i class="fa fa-chevron-down faqicon" style="color: #3374EA;"></i>
                </button>
                <div class="faqcontent">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquam facere adipisci quod mollitia, aut nemo deleniti fugiat et, corrupti sequi. Omnis dolorem quos eligendi placeat soluta sint corrupti quod.</p>
                </div>
            </div>
            <div class="faqwrapper">
                <button class="faqtoggle">
                    <h3>Question 6</h3>
                    <i class="fa fa-chevron-down faqicon" style="color: #3374EA;"></i>
                </button>
                <div class="faqcontent">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquam facere adipisci quod mollitia, aut nemo deleniti fugiat et, corrupti sequi. Omnis dolorem quos eligendi placeat soluta sint corrupti quod.</p>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.faq-wrapper {
    width: 100%;
    margin: 30px 0;
}
.faqcontainer{
    width: 100%;
    margin: auto;
}
.faq-wrapper h1 {
  text-align: center;
  color: #3374ea;
  margin-bottom: 50px;
  font-family: "Montserrat", sans-serif;
}
.faqwrapper{
    background-color: var(--third-color);
    margin-bottom: 20px;
    padding: 15px 30px;
    border-radius: 5px;
    box-shadow: 0px 20px 17px #1C192305;
}
.faqtoggle,
.faqcontent{
    font-family: "Montserrat", sans-serif;
}
.faqwrapper h3 {
  color: #3374ea;
}
.faqtoggle{
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

.faqcontent{
    color: var(--dark-color);
    position: relative;
    font-size: 16px;
    text-align: left;
    line-height: 30px;
    height: 0;
    overflow: hidden;
    transition: all 1s;
}


    /* computer screen*/
    .faq-wrapper {
    position: relative;
}
  .faqcontainer{
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
.faqtwo {
    position:absolute;
    left: 600px;
}
.faqwrapper{
    background-color: var(--third-color);
    margin-bottom: 20px;
    padding: 10px 30px;
    border-radius: 20px;
    box-shadow: 0px 20px 17px #1C192305;
}
.faqtoggle,
.faqcontent{
    font-family: "Montserrat", sans-serif;
}
.faqtoggle{
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
.faqcontent{
    position: relative;
    font-size: 16px;
    text-align: left;
    line-height: 30px;
    height: 0;
    overflow: hidden;
    transition: all 1s;
}
</style>