React state 값 하위 컴포넌트 > 상위 컴포넌트 , 상위 컴포넌트 > 하위 컴포넌트로 전달 방법





------------------------------하위 컴포넌트 > 상위 컴포넌트

// 하위 컴포넌트

 // 상태값을 onCreate 를 통하여 부모에게 전달

 this.props.Test(this.state);





// 부모 컴포넌트

 handleTest= (data) => {

    console.log(data);

  }

<PhoneForm Test={this.handleTest} />







------------------------------상위 컴포넌트 > 하위 컴포넌트

// 부모 컴포넌트

// setState에서 state 추가가 발생 감시

  handleCreate = (data) => {

    const { information } = this.state;

    this.setState({

      information: information.concat({ id: this.id++, ...data })

    })

 }



// state데이터 사용할 컴포넌드로 데이터 전달

<PhoneInfoList data={this.state.information}/>


// 하위 컴포넌트

render(){

// 부모 컴포넌트의 props 데이터를 배열형식으로 담음

const { data } = this.props;

}