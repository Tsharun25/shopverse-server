const getMe = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Protected route accessed",
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const adminDashboard = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Welcome Admin",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getMe,
  adminDashboard,
};