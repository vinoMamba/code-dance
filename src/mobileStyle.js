const string2 = `
/*开始画飞机啦*/
 .airplane {
            position: relative;
            background-color: #8fc8ea;
            height: 60vh;
        }
        .top {
            position: absolute;
            top: 160px;
            left: 50%;
            transform: translate(-50%);
            transform-origin: bottom right;
            border: 5px solid;
            border-color: transparent #b9b8cc transparent #fff;
            border-bottom-width: 40px;
            border-radius: 10px 20px;
        }
        .header {
            overflow: hidden;
            position: relative;
            top: 200px;
            left: 50%;
            transform: translate(-50%);
            width: 80px;
            height: 80px;
            background-color: #b9b8cc;
            border-radius: 50%;
            z-index: 10;
        }
        .windshield {
            z-index: 3;
            position: relative;
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;
        }
        .windshield > div {
            width: 30px;
            border-bottom: 30px solid #0f0f18;
            border-left: 10px solid transparent;
            border-right: 10px solid #0f0f18;
        }
        .windshield > div:nth-child(1) {
            transform: skew(-20deg);
        }
        .windshield >div:nth-child(3) {
            border-left: 10px solid #0f0f18;
            border-right: 10px solid transparent;
        }
        .windshield > div:nth-child(4) {
            border-left: 10px solid #0f0f18;
            border-right: 10px solid transparent;
            transform: skew(20deg);
        }
        .header > div.shadow {
            position: absolute;
            top: -30px;
            left: -30px;
            width: 100px;
            height: 100px;
            background-color: #fff;
            border-radius: 50%;
            z-index: 1;
        }
        .bodyLeft,.bodyRight {
            position: absolute;
            top: 260px;
            left: 50%;
            transform: translate(-110%) rotate(4deg);
            transform-origin: bottom right;
            border: 4px solid;
            border-color: white #b9b8cc transparent transparent;
            border-right-width: 160px;
        }
        .bodyRight {
            transform: scale(-1,1) translate(90%) rotate(4deg);
        }
        .footerLeft,.footerRight {
            position: absolute;
            top: 240px;
            left: 50%;
            transform: translate(-110%) rotate(4deg);
            transform-origin: bottom right;
            border: 4px solid;
            border-color: #b9b8cc #b9b8cc transparent transparent;
            border-right-width: 100px;
        }
        .footerRight {
            transform: scale(-1,1) translate(90%) rotate(4deg);
            border-color: #68677d #68677d transparent transparent;
        }
        .bodyLeft div,.bodyRight div {
            border-radius: 50%;
        }
        .box1 {
            position: absolute;
            top: -16px;
            left: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
            background-color: #b9b8cc;
        }
        .box2 {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 36px;
            height: 36px;
            background-color: #1c1c2e;
        }
        .box3 {
            width: 8px;
            height: 8px;
            background-color: #b9b8cc;
        }
        .box1-small {
            top: -8px;
            left: 24px;
            width: 32px;
            height: 32px;
        }
        .box2-small {
            width: 28px;
            height: 28px;
        }
        .box3-small {
            width: 8px;
            height: 8px;
        }
`
export default string2