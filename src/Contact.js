import React, {Component} from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import update from 'react-addons-update';
import ContactCreate from './ContactCreate';

class Contact extends Component { 
       
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword:'',
            contactData: [{
                name: 'Abet',
                phone: '010-0000-0001'
            }, { 
                name: 'Betty',
                phone: '010-0000-0002'
            }, {
                name: 'Charlie',
                phone: '010-0000-0003'
            }, {
                name: 'David',
                phone: '010-0000-0004'
            }]
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    
    componentWillMount() {  {/**렌더링 되기전 실행 */}
        const contactData = localStorage.contactData;

        if(contactData) {
            this.setState({
                contactData: JSON.parse(contactData)
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {  {/**렌더링 된후 실행 (이전 contactData를 현재 값으로 업데이트)
                                                 이전값의 상태를 가져온다. */}
        if(JSON.stringify(prevState.contactData) != JSON.stringify(this.state.contactData)) {
            localStorage.contactData = JSON.stringify(this.state.contactData);
        }
    }

    handleChange(e) {   {/*검색 텍스트박스*/}
        this.setState({
            keyword: e.target.value
        });
    }

    handleClick(key) { {/* 주소록 선택 */}
        this.setState ({
            selectedKey: key
        });
        this.nameInput.focus();
        console.log(key,'is selected');
    }

    handleCreate(contact) { 
        this.setState({
            contactData: update(this.state.contactData, {
                $push: [contact]
            })
        })
    }

    handleRemove() {
        if(this.state.selectedKey <0) {
            return ;
        }
        this.setState ({
            contactData: update(this.state.contactData,
                { $splice: [[this.state.selectedKey, 1]]}
                ),
                selectedKey:-1
        })
    }

    handleEdit(name, phone) {
        this.setState({
            contactData: update(this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name: { $set : name},
                        phone: {$set : phone}
                    }
                })
        })
    }

    render() {
       
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;
                }
                );
            return data.map((contact, i) => {
                return (<ContactInfo 
                            contact={contact}
                            key={i}
                            onClick={() => this.handleClick(i)}
                            />
                            );
            });
        };
        
        return (
            <div>
                <h1>Contacts</h1>
                <input 
                    name = "keyword"
                    placeholder ="search"
                    value={this.state.keyword}
                    onChange ={this.handleChange}
                    ref = {(ref) => {this.nameInput = ref}}
                />
                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDetails isSelected = {this.state.selectedKey != -1}
                    contact ={this.state.contactData[this.state.selectedKey]}
                    onRemove={this.handleRemove}
                    onEdit={this.handleEdit}
                />
                <ContactCreate
                onCreate={this.handleCreate}
                /> 
            </div>
        );
    }
}

export default Contact;