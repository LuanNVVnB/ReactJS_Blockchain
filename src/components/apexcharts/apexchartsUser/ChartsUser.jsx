import React from 'react';
import { fnGetOutComes } from "../../../actions/outcome/outComeActions";
import { fnGetRankByClassId } from "../../../actions/class-detail-manager/classDetailManagerAction";
import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import * as CONFIG from "../../../config/configUrl";
import * as $http from "../../../utils/httpProvider";
import "./chartUser.css";
import { Trans, withTranslation } from 'react-i18next';
import { Link } from "react-router-dom"
import ImgApachart from "../../../assets/theme/img/empty-state-reports.png";
import ImgNotOff from "../../../assets/theme/img/empty-state-search.png";
// import Covid19 from '../apexchartsBallot/components/Covid19';
var randomColor = require('randomcolor'); // import the script


function ChartsUser() {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.UserProfile.userInfo);

    React.useEffect(() => {
        dispatch(fnGetOutComes(userInfo?.id));
    }, [dispatch, userInfo]);
    React.useEffect(() => {
        $http.getData(CONFIG.API_BASE_URL + "/v1/rest/class/report/" + userInfo?.id).then((response) => {
            dispatch(fnGetRankByClassId(response.data[0].class_id));
        }).catch((error) => {
            console.log(error)
        })

        // fnGetRankByClassId();
    }, [dispatch, userInfo]);
    const rankData = useSelector(state => state.ClassDetailManagement.rankData);
    // const [ outcome, setOutcome]=React.useState();
    const outcomes = useSelector((state) => state.OutcomePage.outcome);
    const [categories, setCategories] = React.useState([]);
    const [score, setScore] = React.useState([]);
    const [quizLabel, setQuizLabel] = React.useState([]);
    const [quizItem, setQuizItem] = React.useState([]);
    const [scoresTB, setScoresTB] = React.useState();
    const [seriesArr, setSeriesArr] = React.useState([]);
    const [filter, setFilter] = React.useState(true);
    const [back, setBack] = React.useState(false);
    const [scoresAVGquiz, setSoresAVGquiz] = React.useState([]);
    const [scoresAVGclass, setSoresAVGclass] = React.useState([]);
    const unique = (arr) => {
        var formArr = arr.sort();
        var newArr = [formArr[0]];
        for (let i = 1; i < formArr.length; i++) {
            if (formArr[i] !== formArr[i - 1]) {
                newArr.push(formArr[i])
            }
        }
        return newArr;
    }


    function count_element_in_array(array2, array) {

        let array1 = [];
        for (let j = 0; j < array2.length; j++) {
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] == array2[j])
                    count++;
            }
            array1.push(count);
        }

        return array1;
    }
    function sum_of_array(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        return Math.round((sum / (array.length)) * 100) / 100;
    }
    function count_number_element(array, n) {
        for (let i = 0; i < array.length; i++) {
            if (array[i]['id_rank'] === n) {
                return array[i];
            }
        }

    }
    React.useEffect(() => {

        let seriesTemp = [];
        let seriesAvg = [];
        let categorie = [];
        let score = [];
        let quiz = [];
        let quizName = [];
        outcomes.length > 0 && outcomes.forEach((outcome) => {
            // categorie.push(outcome.Quiz.name);
            quiz.push(outcome.Quiz.id);
            categorie.push(moment(outcome.updatedAt).format('MM/DD/YYYY'));
            score.push(outcome.score);
            quizName.push(outcome.Quiz.name);
        });

        quizName = unique(quizName);

        setScoresTB(sum_of_array(score));
        setQuizLabel(unique(quizName));
        setCategories(categorie);
        setScore(score);
        setQuizItem(count_element_in_array(unique(quiz), quiz));


        quizName.length > 0 && quizName.forEach((v,key) => {
            let objectLine = {};
            if(quizName?.length > +3 ){
                objectLine['name'] = key;
            }else objectLine['name'] =v;
           
            let objectAvg = {};
            objectAvg['name'] = v;

            let arrData = [];
            let avgSum = [];

            outcomes.length > 0 && outcomes.forEach((outcome) => {
                if (outcome.Quiz.name === v) {
                    avgSum.push(outcome.score);
                    arrData.push(outcome.score);
                }

            });
            objectAvg['sorce'] = sum_of_array(avgSum);
            objectAvg['color'] = randomColor();
            objectLine['data'] = arrData;
            objectLine['type'] = 'line';
            seriesTemp.push(objectLine);
            seriesAvg.push(objectAvg);
        })



        setSeriesArr(seriesTemp);
        setSoresAVGquiz(seriesAvg);


    }, [outcomes, back]);

    //class
    React.useEffect(() => {
        let className = [];
        let imgAvg = [];

        rankData.length > 0 && rankData.forEach((rankData) => {
            let objectImgAvg = {};
            className.push(rankData.rank.user.username);
            if (rankData.rank.user['Avatars.src']) {
                objectImgAvg["id_rank"] = rankData.rank.user.username;
                objectImgAvg["avatar_rank"] = rankData.rank.user['Avatars.src'];
            } else {
                objectImgAvg["id_rank"] = rankData.rank.user.username;
                objectImgAvg["avatar_rank"] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WuPFgEuC0IDHLgVkYoaUIKdEGKCB0E9vTw&usqp=CAU";
            }
            imgAvg.push(objectImgAvg)
        });
        let seriesAvg = [];
        className = unique(className);
        className.length > 0 && className.forEach((item) => {
            let objectAvg = {};
            objectAvg['name'] = item;
            console.log("rank ", rankData.length)
            let avgSum = [];
            let tong = 0;
            rankData.length > 0 && rankData.forEach((rankData) => {
                tong++;
                if (rankData.rank.user.username === item) {
                    avgSum.push(rankData.rank.result.score);
                }
            });
            console.log("tong ", tong)
            objectAvg['sorce'] = sum_of_array(avgSum);
            objectAvg['color'] = randomColor();
            objectAvg['img'] = count_number_element(imgAvg, item);
            seriesAvg.push(objectAvg);
        })
        seriesAvg.sort((prev, now) => now.sorce - prev.sorce);
        setSoresAVGclass(seriesAvg);
    }, [rankData]);

    var options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: categories
        }
    };
    var series = [
        {
            name: "series-1",
            data: score
        }
    ];
    //circle


    var optionsT = {
        labels: quizLabel,

    };
    var seriesT = quizItem;

    const chartOptions = {
        series: seriesArr,
        options: {
            color: ['#6ab04c', 'red'],
            chart: {
                background: 'transparent'
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: categories
            },
            legend: {
                position: 'top'
            },
            grid: {
                show: false
            }
        }
    }




    function filterDay(day) {
        let scoreToday = [];
        let categoryToday = [];
        outcomes && outcomes.length > 0 && outcomes.forEach((outcome) => {
            if (moment(outcome.createdAt).format('MM/DD/YYYY') == day) {
                scoreToday.push(outcome.score);
                categoryToday.push(moment(outcome.updatedAt).format('MM/DD/YYYY'))
            }
        })
        return { scoreToday: scoreToday, categoryToday: categoryToday }
    }
    function filterPeriod(ago, now) {
        let scoreToday = [];
        let categoryToday = [];
        outcomes && outcomes.length > 0 && outcomes.forEach((outcome) => {
            if (ago <= outcome.createdAt <= now) {
                scoreToday.push(outcome.score);
                categoryToday.push(moment(outcome.updatedAt).format('MM/DD/YYYY'))
            }
        })

        return { scoreToday: scoreToday, categoryToday: categoryToday }
    }
    const handleOnClickToday = async () => {
        const now = moment(new Date()).format('MM/DD/YYYY');
        let chartDay = await filterDay(now)
        setScore(chartDay.scoreToday);
        setCategories(chartDay.categoryToday);

    }
    const handleOnClickYesterday = async () => {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const now = moment(yesterday).format('MM/DD/YYYY');
        let chartDay = await filterDay(now)
        setScore(chartDay.scoreToday);
        setCategories(chartDay.categoryToday);
    }
    const handleOnClickWeeken = async () => {
        let now = new Date();
        now.setDate(now.getDate() - 7);

        let chartDay = await filterPeriod(now, new Date());
        setScore(chartDay.scoreToday);
        setCategories(chartDay.categoryToday);
    }
    const handleOnClickMonth = async () => {
        let now = new Date();
        now.setDate(now.getDate() - 30);

        let chartDay = await filterPeriod(now, new Date());
        setScore(chartDay.scoreToday);
        setCategories(chartDay.categoryToday);
    }


    const statusCards = [
        {
            "icon": "fa fa-play",
            "count": outcomes.length,
            "title": <Trans i18nKey={'Dashboard.number-play'} />
        },
        {
            "icon": "fa fa-area-chart",
            "count": quizLabel.length,
            "title": <Trans i18nKey={'Dashboard.type'} />
        },
        {
            "icon": "fa fa-bar-chart",
            "count": scoresTB,
            "title": <Trans i18nKey={'Dashboard.number-core'} />
        },
        {
            "icon": "fa-solid fa-book-open-reader",
            "count": scoresAVGclass.length,
            "title": <Trans i18nKey={'Dashboard.Total-class'} />
        }
    ];
    const skills = scoresAVGquiz;



    return (
        <React.Fragment>
            <div>
                {
                    score && score.length > 0 ?
                        <>
                            <div className="row ">
                                {
                                    statusCards.map((item, index) => (
                                        <div className="col-2 row-chart " key={index}>
                                            <div className='status-card ibox-content-card'>
                                                <div className="status-card__icon">
                                                    <i className={item.icon}></i>
                                                </div>
                                                <div className="status-card__info">
                                                    <h4>{item.count}</h4>
                                                    <span>{item.title}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="dropdown col-2 row-chart ">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><Trans i18nKey={'Dashboard.button-filter'} /></button>
                                    <ul className="dropdown-menu menu-date">
                                        <li className="label-select" data-label="today" onClick={() => { handleOnClickToday() }}><Trans i18nKey={'Dashboard.today'} /></li>
                                        <li className="label-select" data-label="yesterday" onClick={() => { handleOnClickYesterday() }}><Trans i18nKey={'Dashboard.yesterday'} /></li>
                                        <li className="label-select" data-label="last_7_days" onClick={() => { handleOnClickWeeken() }}><Trans i18nKey={'Dashboard.last7'} /></li>
                                        <li className="label-select" data-label="this_month" onClick={() => { handleOnClickMonth() }}><Trans i18nKey={'Dashboard.last30'} /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="ibox-content" style={{ height: '380px' }}>
                                                {/* chart */}
                                                <ReactApexChart
                                                    options={optionsT}
                                                    series={seriesT}
                                                    type="donut"
                                                    width="90%"
                                                />
                                            </div>
                                            <strong><Trans i18nKey={'Dashboard.chart1'} /></strong>
                                        </div>
                                        <div className="col-6" >
                                            <div className="ibox-content " style={{ height: '380px' }}>
                                                {/* chart */}
                                                <ReactApexChart
                                                    options={chartOptions.options}
                                                    series={chartOptions.series}
                                                    type='line'
                                                    height='100%'
                                                />
                                            </div>
                                            <strong><Trans i18nKey={'Dashboard.chart2'} /></strong>
                                        </div>
                                        <div className="col-6 bottom-chart min-hieght-class">
                                            <div className="ibox-content" style={{ height: '380px' }} >
                                                {/* chart */}
                                                <ReactApexChart
                                                    options={options}
                                                    series={series}
                                                    type="bar"
                                                    width="100%"
                                                    height="100%"
                                                />

                                            </div>
                                            <strong><Trans i18nKey={'Dashboard.chart3'} /></strong>
                                        </div>
                                        <div className="col-6 bottom-chart  min-hieght-class" >

                                            <div className="ibox-content  min-hieght-class"  style={{ height: '380px' }}>
                                                {skills && skills.map((item, key) => (
                                                    <div key={key} className="card-skills mt-3">
                                                        <div className="name-skills">
                                                            <span>{item.name}</span><span className="text-primary font-weight-bold">{" "}({item.sorce}%)</span>
                                                        </div>
                                                        <div style={{ width: `${item.sorce}%`, height:`${60/skills.length}px`, backgroundColor: `${item.color}` }} className="result-skills">

                                                        </div>
                                                    </div>))}
                                            </div>
                                            <strong><Trans i18nKey={'Dashboard.chart4'} /></strong>
                                        </div>


                                    </div>
                                    <div className="col-4">
                                        <div className="row">

                                        </div>

                                    </div>

                                </div>
                                <div className="col-4 min-hieght-classrank">
                                    {
                                        scoresAVGclass.length > 1 ? scoresAVGclass.map((item, key) => (
                                            key < 9 && (
                                                <div key={key} className='status-card  ibox-content-rank'>
                                                    < div className="status-card__name">
                                                        <div className="status-card-rank">
                                                            <b>{key + 1}</b>
                                                        </div>
                                                        <div className="status-card_avatar">
                                                            <img src={item.img?.avatar_rank ? item.img?.avatar_rank : ''} className="status-img-item" />
                                                        </div>
                                                        <div className="status-name-item">
                                                            <div className="status-img">
                                                                {item.name}
                                                            </div>
                                                            <strong>achieve the goal</strong>
                                                        </div>
                                                    </div>

                                                    <div className="status-card__info">
                                                        <div className="status-card__color" style={{ background: `${item.color}` }}><span>{item?.sorce ? item?.sorce : 0}</span></div>
                                                    </div>

                                                </div>
                                            )

                                        )) : <div className='status-card-not-off'>
                                            <div>
                                                <img className="not-off-img" src={ImgNotOff} />
                                            </div>
                                            <div>
                                                <strong><Trans i18nKey={'Dashboard.noclass'} /></strong>
                                            </div>
                                        </div>
                                    }

                                </div>
                            </div>
                        </> :
                        <>
                            <div className="row wrapper border-bottom white-bg page-heading" id="setting">
                                <div className="col-lg-12">
                                    <h2>Dashboard</h2>
                                    <ol id="setting" className="breadcrumb">
                                        <li id="setting" className="breadcrumb-item">
                                            <span>Home</span>
                                        </li>
                                        <li id="setting" className="breadcrumb-item">
                                            <span>Dashboard</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12" >
                                    <div className="row">
                                        <div onClick={() => { setBack(!back) }} className="back-chart"><i className="fa fa-reply" aria-hidden="true">Back</i></div>
                                    </div>
                                    <div className="centent-img-apachart">
                                        <img src={ImgApachart} alt="error-search" />
                                        <div className="centent-apachart">
                                            <b>It’s all about the data!</b>
                                        </div>
                                        <p>Conduct your first game and you’ll see a report here.</p>
                                        Go to Play game? <Link to="/quiz-category">play now</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                }
            </div>
            {/* <Covid19/>
             */}



        </React.Fragment>
    )
}



export default withTranslation()(ChartsUser)