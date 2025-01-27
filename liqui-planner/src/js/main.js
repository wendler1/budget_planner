"use strict";

const budget_book = {
    total_balance : {
        income : 0,
        outcome : 0,
        total : 0,
    },
    new_entries : [],

    // get the input from the user
    get_information : function () {
        this.new_entries.push({
            title : prompt("title:"),
            input : prompt("input (income/expenses):"),
            amount : parseInt(prompt("amount (in cent): ")),
            date : prompt("date (yyyy-mm-dd):")
        });
    },
    // show the information as output console
    show_information : function () {
        console.log(`title: ${this.new_entry.title}
            input: ${this.new_entry.input}
            amount: ${this.new_entry.amount} ct
            date: ${this.new_entry.date}`
                );
    },
    // add the information to the total
    add_information : function () {

        // // else if
        // if (this.new_entry.input === "income") {
        //     this.total_balance.income = this.total_balance.income + this.new_entry.amount;
        //     this.total_balance.total = this.total_balance.total + this.new_entry.amount;
        // } else if (this.new_entry.input === "expenses") {
        //     this.total_balance.outcome = this.total_balance.outcome + this.new_entry.amount;
        //     this.total_balance.total = this.total_balance.total - this.new_entry.amount;
        // } else {
        //     console.log("Please enter income or expenses");
        // }

        // switch 
        switch (this.new_entry.input) {
            case "income":
                this.total_balance.income = this.total_balance.income + this.new_entry.amount;
                this.total_balance.total = this.total_balance.total + this.new_entry.amount;
                break;
            case "expenses":
                this.total_balance.outcome = this.total_balance.outcome + this.new_entry.amount;
                this.total_balance.total = this.total_balance.total - this.new_entry.amount;
                break;
            default:
                console.log("Please enter income or expenses");
                break;
        }

    },

    // show the total balance
    show_balance : function () {
        console.log(`income: ${this.total_balance.income} ct
            outcome: ${this.total_balance.outcome} ct
            total: ${this.total_balance.total} ct
            positive: ${this.total_balance.total >= 0}`
        );
    },
    // add antry
    add_entry : function () {
        this.get_information();
        this.show_information();
        this.add_information();
        this.show_balance();
    }
};

budget_book.add_entry();



