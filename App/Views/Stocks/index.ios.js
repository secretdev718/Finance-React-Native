'use strict';

var React = require('react-native');
var store = require('react-native-simple-store');

var {
  AlertIOS,
  ListView,
  Text,
  View,
} = React;

// Utils
var finance = require('../../Utils/finance');
var UtilFuncs = require('../../Utils/functions');

// View Elements
var StockCell = require('./Elements/StockCell');

// Views
var EditView = require('../Edit');
var StockView = require('../Stock');

// Styles
var styles = require('./style');

var ViewReactClass = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false,
      selectedStock: {},
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    var responseData = [{
      AfterHoursChangeRealtime: null,
      AnnualizedGain: null,
      Ask: "114.76",
      AskRealtime: null,
      AverageDailyVolume: "59604800",
      Bid: "114.44",
      BidRealtime: null,
      BookValue: "22.03",
      Change: "-0.29",
      ChangeFromFiftydayMovingAverage: "1.72",
      ChangeFromTwoHundreddayMovingAverage: "-8.43",
      ChangeFromYearHigh: "-19.83",
      ChangeFromYearLow: "22.71",
      ChangePercentRealtime: null,
      ChangeRealtime: null,
      Change_PercentChange: "-0.29 - -0.25%",
      ChangeinPercent: "-0.25%",
      Commission: null,
      Currency: "USD",
      DaysHigh: "116.69",
      DaysLow: "114.02",
      DaysRange: "114.02 - 116.69",
      DaysRangeRealtime: null,
      DaysValueChange: null,
      DaysValueChangeRealtime: null,
      DividendPayDate: "8/13/2015",
      DividendShare: "2.08",
      DividendYield: "1.82",
      EBITDA: "77.88B",
      EPSEstimateCurrentYear: "9.13",
      EPSEstimateNextQuarter: "3.18",
      EPSEstimateNextYear: "9.77",
      EarningsShare: "8.65",
      ErrorIndicationreturnedforsymbolchangedinvalid: null,
      ExDividendDate: "8/6/2015",
      FiftydayMovingAverage: "112.99",
      HighLimit: null,
      HoldingsGain: null,
      HoldingsGainPercent: null,
      HoldingsGainPercentRealtime: null,
      HoldingsGainRealtime: null,
      HoldingsValue: null,
      HoldingsValueRealtime: null,
      LastTradeDate: "9/25/2015",
      LastTradePriceOnly: "114.71",
      LastTradeRealtimeWithTime: null,
      LastTradeTime: "4:00pm",
      LastTradeWithTime: "4:00pm - <b>114.71</b>",
      LowLimit: null,
      MarketCapRealtime: null,
      MarketCapitalization: "654.16B",
      MoreInfo: null,
      Name: "Apple Inc.",
      Notes: null,
      OneyrTargetPrice: "145.77",
      Open: "116.36",
      OrderBookRealtime: null,
      PEGRatio: "0.86",
      PERatio: "13.27",
      PERatioRealtime: null,
      PercebtChangeFromYearHigh: "-14.74%",
      PercentChange: "-0.25%",
      PercentChangeFromFiftydayMovingAverage: "+1.52%",
      PercentChangeFromTwoHundreddayMovingAverage: "-6.85%",
      PercentChangeFromYearLow: "+24.68%",
      PreviousClose: "115.00",
      PriceBook: "5.22",
      PriceEPSEstimateCurrentYear: "12.56",
      PriceEPSEstimateNextYear: "11.74",
      PricePaid: null,
      PriceSales: "2.92",
      SharesOwned: null,
      ShortRatio: "1.05",
      StockExchange: "NMS",
      Symbol: "AAPL",
      TickerTrend: null,
      TradeDate: null,
      TwoHundreddayMovingAverage: "123.14",
      Volume: "56151926",
      YearHigh: "134.54",
      YearLow: "92.00",
      YearRange: "92.00 - 134.54",
      symbol: "AAPL",
    }, {
      AfterHoursChangeRealtime: null,
      AnnualizedGain: null,
      Ask: "612.60",
      AskRealtime: null,
      AverageDailyVolume: "2552810",
      Bid: "611.12",
      BidRealtime: null,
      BookValue: "163.07",
      Change: "-13.83",
      ChangeFromFiftydayMovingAverage: "-16.75",
      ChangeFromTwoHundreddayMovingAverage: "39.49",
      ChangeFromYearHigh: "-66.67",
      ChangeFromYearLow: "125.74",
      ChangePercentRealtime: null,
      ChangeRealtime: null,
      Change_PercentChange: "-13.83 - -2.21%",
      ChangeinPercent: "-2.21%",
      Commission: null,
      Currency: "USD",
      DaysHigh: "629.77",
      DaysLow: "611.00",
      DaysRange: "611.00 - 629.77",
      DaysRangeRealtime: null,
      DaysValueChange: null,
      DaysValueChangeRealtime: null,
      DividendPayDate: null,
      DividendShare: null,
      DividendYield: null,
      EBITDA: "22.62B",
      EPSEstimateCurrentYear: "28.88",
      EPSEstimateNextQuarter: "8.11",
      EPSEstimateNextYear: "33.75",
      EarningsShare: "21.22",
      ErrorIndicationreturnedforsymbolchangedinvalid: null,
      ExDividendDate: null,
      FiftydayMovingAverage: "628.72",
      HighLimit: null,
      HoldingsGain: null,
      HoldingsGainPercent: null,
      HoldingsGainPercentRealtime: null,
      HoldingsGainRealtime: null,
      HoldingsValue: null,
      HoldingsValueRealtime: null,
      LastTradeDate: "9/25/2015",
      LastTradePriceOnly: "611.97",
      LastTradeRealtimeWithTime: null,
      LastTradeTime: "4:00pm",
      LastTradeWithTime: "4:00pm - <b>611.97</b>",
      LowLimit: null,
      MarketCapRealtime: null,
      MarketCapitalization: "419.53B",
      MoreInfo: null,
      Name: "Google Inc.",
      Notes: null,
      OneyrTargetPrice: "645.00",
      Open: "629.77",
      OrderBookRealtime: null,
      PEGRatio: "1.22",
      PERatio: "28.83",
      PERatioRealtime: null,
      PercebtChangeFromYearHigh: "-9.82%",
      PercentChange: "-2.21%",
      PercentChangeFromFiftydayMovingAverage: "-2.66%",
      PercentChangeFromTwoHundreddayMovingAverage: "+6.90%",
      PercentChangeFromYearLow: "+25.86%",
      PreviousClose: "625.80",
      PriceBook: "3.84",
      PriceEPSEstimateCurrentYear: "21.19",
      PriceEPSEstimateNextYear: "18.13",
      PricePaid: null,
      PriceSales: "6.16",
      SharesOwned: null,
      ShortRatio: "1.90",
      StockExchange: "NMS",
      Symbol: "GOOG",
      TickerTrend: null,
      TradeDate: null,
      TwoHundreddayMovingAverage: "572.48",
      Volume: "2174009",
      YearHigh: "678.64",
      YearLow: "486.23",
      YearRange: "486.23 - 678.64",
      symbol: "GOOG",
    }];

    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows(responseData),
    //   loaded: true
    // });

    var that = this;
    store.get('watchlist').then((result) => {
      if (!Array.isArray(result) || result === []) {
        result = [
          {symbol: 'AAPL', share: 100},
          {symbol: 'GOOG', share: 100},
          {symbol: '0001.HK', share: 100},
          {symbol: '0002.HK', share: 100},
          {symbol: '0011.HK', share: 100},
          {symbol: '1211.HK', share: 100}
        ];
        store.save('watchlist', result);
      }

      var symbols = [];
      for (var i=0; i < result.length; i++) {
        symbols.push(result[i].symbol);
      }

      finance.getStock({stock: symbols}, 'quotes')
        .then(function(response) {
          return response.json();
        }).then(function(json) {
          console.log('>>', json);
          that.setState({
            dataSource: that.state.dataSource.cloneWithRows(json.query.results.quote),
            watchlist: result,
            loaded: true,
            selectedStock: json.query.results.quote[0],
          });
        }).done();

    });
  },

  render: function() {
    if(!this.state.loaded){
      return(
        <View style={styles.container}>
          <Text style={styles.loadingText}>
            Fetching watchlist...
          </Text>
        </View>
      );
    }
    return (
      this.renderListView()
    );
  },

  renderListView: function() {
    return(
      <View style={styles.container}>
        <View style={styles.topBlock}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderStockCell}
            style={styles.stocksListView}/>
        </View>

        <View style={styles.bottomBlock}>
          <View style={styles.stockName}>
            <Text style={styles.stockNameText}>
              {this.state.selectedStock.Name}
            </Text>
          </View>
          <View style={styles.separator}/>
          <View style={styles.stockDetails}>
            <View style={styles.stockDetailsRow}>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockPropertyText}>
                  OPEN
                </Text>
              </View>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockValueText}>
                  {this.state.selectedStock.Open}
                </Text>
              </View>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockPropertyText}>
                  MKT CAP
                </Text>
              </View>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockValueText}>
                  {this.state.selectedStock.MarketCapitalization}
                </Text>
              </View>
            </View>
            <View style={styles.separatorThin}/>

            <View style={styles.stockDetailsRow}>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockPropertyText}>
                  HIGH
                </Text>
              </View>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockValueText}>
                  {this.state.selectedStock.DaysHigh}
                </Text>
              </View>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockPropertyText}>
                  52W HIGH
                </Text>
              </View>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockValueText}>
                  {this.state.selectedStock.YearHigh}
                </Text>
              </View>
            </View>
            <View style={styles.separatorThin}/>

            <View style={styles.stockDetailsRow}>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockPropertyText}>
                  LOW
                </Text>
              </View>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockValueText}>
                  {this.state.selectedStock.DaysLow}
                </Text>
              </View>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockPropertyText}>
                  52W LOW
                </Text>
              </View>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockValueText}>
                  {this.state.selectedStock.YearLow}
                </Text>
              </View>
            </View>
            <View style={styles.separatorThin}/>

            <View style={styles.stockDetailsRow}>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockPropertyText}>
                  VOL
                </Text>
              </View>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockValueText}>
                  {this.state.selectedStock.Volume}
                </Text>
              </View>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockPropertyText}>
                  AVG VOL
                </Text>
              </View>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockValueText}>
                  {this.state.selectedStock.AverageDailyVolume}
                </Text>
              </View>
            </View>
            <View style={styles.separatorThin}/>

            <View style={styles.stockDetailsRow}>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockPropertyText}>
                  P/E
                </Text>
              </View>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockValueText}>
                  {this.state.selectedStock.PERatio}
                </Text>
              </View>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockPropertyText}>
                  YIELD
                </Text>
              </View>
              <View style={styles.stockDetailsColumn}>
                <Text style={styles.stockValueText}>
                  {this.state.selectedStock.DividendYield}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.separator}/>

          <View style={styles.stockName}>
            <Text style={styles.stockNameText}>
              FinanceReactNative
            </Text>
          </View>
        </View>
      </View>
    );
  },

  renderStockCell: function(stock) {
    return(
      <StockCell
        onSelect={() => this.selectStock(stock)}
        stock={stock}/>
    );
  },

  _onPressCancelButton: function() {
    this.props.navigator.pop();
  },

  _onPressEditButton: function(stock) {
    this.props.navigator.push({
      title: 'Edit',
      component: EditView,
      passProps: {
        stock: stock,
      },
      leftButtonTitle: 'Cancel',
      onLeftButtonPress: this._onPressCancelButton,
    })
  },

  selectStock: function(stock) {
    // console.log('selectStock', stock);
    this.setState({
      selectedStock: stock,
    });
    // this.props.navigator.push({
    //   title: stock.name,
    //   component: StockView,
    //   passProps: {
    //     stock: stock,
    //   },
    //   rightButtonTitle: 'Edit',
    //   onRightButtonPress: () => this._onPressEditButton(stock.symbol),
    // });
  },

});
module.exports = ViewReactClass;
