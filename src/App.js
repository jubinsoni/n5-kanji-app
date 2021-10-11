import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Footer } from './components/footer/footer.component';
import { CardDetails } from './components/card-details/card-details.component';
import { NotFound } from './components/not-found/not-found.component';
import { Switch,Route } from 'react-router';
import { datas } from './utils/data'

export const DefaultApp = (props) => {
  var isfilteredKanjisLengthZero = "";
  if(!props.filteredKanjis.length)
  {
    isfilteredKanjisLengthZero = "No Results Found";
  }
  return(
    <div className="App">
      <h1>Browse N5 Kanjis</h1>
        {/* <p>{console.log(this.state.kanjis)}</p> */}
        <SearchBox placeHolder='Type Romaji' handleChange={props.handleChange} />
        {/* {console.log(filteredKanjis.length)} */}
        {/* <CardList kanjiList={this.state.kanjis} />  */}
        <CardList kanjiList={props.filteredKanjis} /> 
        <p>{isfilteredKanjisLengthZero}</p>
        <Footer footerMessage='Made with &#10084;&#65039;&nbsp; by Jubin Soni' /> 
    </div>
  );
}

class App extends Component{
  constructor(){
    super();

    this.state = {
      kanjis: datas,
      searchKanji: ""
    };
  }

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   //.then(users => console.log(users))
  //   .then(users => this.setState({kanjis : users}))
  // }

  handleChange = (e) => (
    this.setState({searchKanji: e.target.value})
  )

  render() {
    const {kanjis,searchKanji} = this.state;
    const filteredKanjis = kanjis.filter(kanji => 
      kanji.meaning.toLowerCase().includes(searchKanji.toLowerCase())
    );
    return (
      <div>
         <Switch>
          <Route exact={true} path='/' render={(props) => (<DefaultApp filteredKanjis={filteredKanjis} handleChange={this.handleChange} />)}/>
          <Route path='/details/:id' component={CardDetails} />
          {/* <DefaultApp filteredKanjis={filteredKanjis} handleChange={this.handleChange} /> */}
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  };
}

export default App;
