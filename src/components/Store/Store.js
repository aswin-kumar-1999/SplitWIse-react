let updateTransaction = undefined;
let updateDashTransaction = undefined;
let updateGroup = undefined;
let updateUser = undefined;
let lastTransaction = 0;

export const transaction = updateTransaction ?? require('../../data/transaction.json');
export const group = updateGroup ?? require('../../data/group.json');
export const user = updateUser ?? require('../../data/user.json');
export const dashTransaction = updateDashTransaction ?? require('../../data/transaction.json');

export const dataStore = (amount, paid_by, owes, desc, groupName) => {
    console.log("sadfsadf")
    if (updateUser === undefined) {
        console.log("unpdate empty")
        lastTransaction = +transaction.last
        updateTransaction = transaction;
        updateDashTransaction = transaction;
        updateGroup = group;
        updateUser = user;
    }
    // console.log(updateUser)
    lastTransaction += 1;
    updateDashTransaction[lastTransaction] = {
        amount,
        paid_by,
        owes,
        desc
    }
    updateTransaction[lastTransaction] = {
        amount,
        paid_by,
        owes,
        desc
    }
    updateTransaction.last = lastTransaction;
    if (groupName === 'No group') {
        updateUser[paid_by] = updateUser[paid_by] ?? {}
        console.log("owe", owes)
        owes.forEach(name => {
            updateUser[paid_by] = {
                ...updateUser[paid_by],
                [name]: updateUser[paid_by][name] ?? [],
                owes: updateUser[paid_by].owes ?? []
            }
            updateUser[paid_by] = {
                ...updateUser[paid_by],
                [name]: [...updateUser[paid_by][name], lastTransaction],
            }

            updateUser[name] = updateUser[name] ?? {};
            updateUser[name] = {
                ...updateUser[name],
                owes: updateUser[name].owes ?? []
            }
            updateUser[name] = {
                ...updateUser[name],
                owes: [...updateUser[name].owes, paid_by]
            }
        })
    }
    else {
        updateGroup[groupName] = {
            transaction: [...updateGroup[groupName].transaction, lastTransaction],
            users: [...updateGroup[groupName].users]
        }
    }
    console.log("Update Data", updateUser, updateTransaction, updateGroup)
}

export const settler = (userName) => {
    if (updateDashTransaction == undefined) {
        updateDashTransaction = transaction
    }
    console.log(updateDashTransaction)
    for (let key in updateDashTransaction) {
        if (key !== "last") {
            if (updateDashTransaction[key].paid_by === userName) {
                delete updateDashTransaction[key]
            }

            else if (updateDashTransaction[key]["owes"].includes(userName)) {
                updateDashTransaction[key].owes = updateDashTransaction[key].owes.filter(name => name !== userName)
                if( updateDashTransaction[key].owes.length ===0){
                    delete updateDashTransaction[key]
                }
            }
            console.log(updateDashTransaction)
        }
    }
    console.log(updateDashTransaction)
}