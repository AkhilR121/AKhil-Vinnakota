// 1.enterInput()
// 2.withDraw() -subtract money   3.Diposit() -add money 
// 4.showBalanceAndName() 

//Let fetch the id Elements from the HTML
let showTotalBalance = document.getElementById('showTotalBalance')

//Let create a class with properties
class Bank {
    constructor() {
        // this.Name = Name
        this.amount
        this.balance = 0
    }


    withDraw(withDrawAmount) {


        if(this.balance >= withDrawAmount) {
            this.amount = Number(withDrawAmount);
            this.balance -= this.amount

            let TakenAmount = document.getElementById('TakenAmount')
            TakenAmount.innerText = `Withdraw Amount: ${withDrawAmount}`
        } else {
            let outOfBal = document.getElementById('outOfBal')
            outOfBal.innerHTML = `❌ Transaction Failed❗ <br> Out Of Balance`
        }

        // console.log('WithDraw Amount',this.balance);
        let showTotalBalance = document.getElementById('showTotalBalance')
        showTotalBalance.innerText = `Total Balance: ${this.balance}`
    }
    
    Diposit(depositAmount) {
        this.amount = Number(depositAmount);
        this.balance += this.amount

        let givenAmount = document.getElementById('givenAmount')
        givenAmount.innerText = `Deposit Amount: ${depositAmount}`

        // console.log('Deposit Amount',this.balance);
        let showTotalBalance = document.getElementById('showTotalBalance')
        showTotalBalance.innerText = `Total Balance: ${this.balance}`
        
    }

}

let bankUser = new Bank()


//WithDraw Function
let withDraw = () => {
    let enterAmount = document.getElementById('enterAmount')
    bankUser.withDraw(enterAmount.value)

    nameEntry()

}


//Deposit Function
let Deposit = () => {
    let enterAmount = document.getElementById('enterAmount')
    bankUser.Diposit(enterAmount.value)

    nameEntry()
}

let nameEntry = () => {
    let enterName = document.getElementById('enterName')
    let showName = document.getElementById('showName')
    showName.innerText = `Name: ${enterName.value}`

}