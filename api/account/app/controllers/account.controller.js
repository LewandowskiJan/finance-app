const Account = require('../models/account');
const BalanceHistory = require('../models/balanceHistory');

exports.getAllAccounts = async (req, res, next) => {
  try {
    const accounts = await Account.find();
    const historyBalances = await BalanceHistory.find();

    const result = accounts.map((account) => {
      return {
        ...account._doc,
        balanceHistory: historyBalances.filter((hb) => hb.accountId === account._id.toString()),
      };
    });
    res.json(result);
  } catch (error) {
    return next(error);
  }
};

exports.addAccount = async (req, res, next) => {
  try {
    let newAccount = new Account();
    newAccount.name = req.body.name;

    newAccount.save((error) => {
      let newBalanceHistory = new BalanceHistory();

      newBalanceHistory.accountId = newAccount._id;
      newBalanceHistory.date = newAccount.dateOfCreate;
      error
        ? res.status(400).json(Formatter.bindErrorMsg(error))
        : newBalanceHistory.save((err, historyBalance) => {
            if (err) {
              return res.status(400).json(Formatter.bindErrorMsg(err));
            }
            newAccount.balanceHistory = { newBalanceHistory };
            const response = { ...newAccount._doc, balanceHistory: [newBalanceHistory] };
            res.json(response);
          });
    });
  } catch (error) {
    return next(error);
  }
};

exports.getAccountById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const account = await Account.findOne({ _id: id });
    const balanceHistory = await BalanceHistory.find({ accountId: id });

    if (!account) {
      res.json({});
    } else {
      const response = { ...account._doc, balanceHistory: [balanceHistory] };
      res.json(response);
    }
  } catch (error) {
    return next(error);
  }
};

exports.deleteAccountById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const account = await Account.findOneAndDelete({ _id: id }).catch((err) => res.status(400).json(err));
    const balanceHistory = await BalanceHistory.deleteMany({ accountId: id });

    if (!account) {
      res.json({});
    } else {
      const response = { ...account._doc, deletedDetails: [balanceHistory] };
      res.json(response);
    }
  } catch (error) {
    return next(error);
  }
};

exports.updateAccountById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatingProperties = req.body;

    if (req.body.balance) {
      let newBalanceHistory = new BalanceHistory();
      newBalanceHistory.balance = req.body.balance;
      newBalanceHistory.accountId = id;
      await newBalanceHistory.save();
    }

    await Account.updateOne({ _id: id }, updatingProperties, {
      new: true,
      runValidators: true,
      context: 'query',
    });

    const account = await Account.findOne({ _id: id });
    const balanceHistory = await BalanceHistory.find({ accountId: id });

    const response = { ...account._doc, balanceHistory: balanceHistory };
    res.json(response);
  } catch (error) {
    return next(error);
  }
};
