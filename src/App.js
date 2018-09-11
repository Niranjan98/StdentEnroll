import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const Branch = [
  {
    value: 'cse',
    label: 'CSE',
  },
  {
    value: 'ise',
    label: 'ISE',
  },
  {
    value: 'ece',
    label: 'ECE',
  },
  {
    value: 'eee',
    label: 'EEE',
  },
  {
    value: 'me',
    label: 'ME',
  },
  {
    value: 'ce',
    label: 'CE',
  },
];


const Gender = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'feMale',
    label: 'Female',
  },
  {
    value: 'other',
    label: 'Other',
  },
];

const Stream = [
  {
    value: 'be',
    label: 'BE',
  },
  {
    value: 'mtech',
    label: 'M-tech',
  },
  {
    value: 'mba',
    label: 'MBA',
  },
];

class TextFields extends React.Component {




  state = {
    usn: "", name: "", stream: "", branch: "", currentSem: "", batch: "", mobile: "", DOB: "", gender: "",
    fatherName: "", fatherOccupation: "", fatherAge: "", fatherIncome: "", fatherMobile: "", incomeClaim: "",
    motherName: "", motherOccupation: "", motherAge: "", motherIncome: "", motherMobile: "",
    gaurdianName: "", gaurdianOccupation: "", gaurdianAge: "", gaurdianMobile: "",
    firstName: "", middleName: "", lastName: "", religion: "", caste: "", subCaste: "", blood: "", nationality: "", motherTongue: "", area: "", email: "", currentAddress: "", currentCity: "", currentState: "", country: "", pinCode: "", permAddress: "", permCity: "", permState: "", permCountry: "", permPincode: "", phone: "", emergencyContact: "", birthPlace: "", birthState: "", birthCountry: "", disability: "", disableType: "", backward: "", adharCard: "", siblings: "", entranceExam: "", admissionDate: "", admissionOrder: "", seatCatagoryAlloted: "", seatCatagoryClaimed: "", collegeCode: "", degreeLevel: "", jeeRank: "", schoolName: "", schoolBoard: "", schoolTown: "", schoolState: "", schoolRegNo: "", schoolPassYear: "", schoolMarkscardNo: "", schoolMedium: "", schoolMaxMarks: "", schoolMarks: "", schoolAggregate: "", collegeName: "", collegeBoard: "", collegeTown: "", collegeState: "", collegeCountry: "", collegePassYear: "", collegeRegNo: "", collegeMaxMarks: "", collegeMarks: "", collegeAggregate: "", collegeMarkscardNo: "", collegeMedium: "", attempts: "", sub1MaxMarks: "", sub2MaxMarks: "", sub3MaxMarks: "", sub1Marks: "", sub2Marks: "", sub3Marks: "", entranceOriginal: "", entranceCopy: "", sslcOriginal: "", sslcCopy: "", collegeOriginal: "", collegeCopy: "", reservationOriginal: "", reservationCopy: "", specialOriginal: "", specialCopy: "", scstobcOriginal: "", scstobcCopy: "", migrationOriginal: "", migrationCopy: "", tcOriginal: "", tcCopy: "", studyOriginal: "", studyCopy: "", otherOriginal: "", otherCopy: ""

  };



  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      usn: "", name: "", stream: "", branch: "", currentSem: "", batch: "", mobile: "", DOB: "", gender: "",
      fatherName: "", fatherOccupation: "", fatherAge: "", fatherIncome: "", fatherMobile: "", incomeClaim: "",
      motherName: "", motherOccupation: "", motherAge: "", motherIncome: "", motherMobile: "",
      gaurdianName: "", gaurdianOccupation: "", gaurdianAge: "", gaurdianMobile: "",
      firstName: "", middleName: "", lastName: "", religion: "", caste: "", subCaste: "", blood: "", nationality: "", motherTongue: "", area: "", email: "", currentAddress: "", currentCity: "", currentState: "", country: "", pinCode: "", permAddress: "", permCity: "", permState: "", permCountry: "", permPincode: "", phone: "", emergencyContact: "", birthPlace: "", birthState: "", birthCountry: "", disability: "", disableType: "", backward: "", adharCard: "", siblings: "", entranceExam: "", admissionDate: "", admissionOrder: "", seatCatagoryAlloted: "", seatCatagoryClaimed: "", collegeCode: "", degreeLevel: "", jeeRank: "", schoolName: "", schoolBoard: "", schoolTown: "", schoolState: "", schoolRegNo: "", schoolPassYear: "", schoolMarkscardNo: "", schoolMedium: "", schoolMaxMarks: "", schoolMarks: "", schoolAggregate: "", collegeName: "", collegeBoard: "", collegeTown: "", collegeState: "", collegeCountry: "", collegePassYear: "", collegeRegNo: "", collegeMaxMarks: "", collegeMarks: "", collegeAggregate: "", collegeMarkscardNo: "", collegeMedium: "", attempts: "", sub1MaxMarks: "", sub2MaxMarks: "", sub3MaxMarks: "", sub1Marks: "", sub2Marks: "", sub3Marks: "", entranceOriginal: "", entranceCopy: "", sslcOriginal: "", sslcCopy: "", collegeOriginal: "", collegeCopy: "", reservationOriginal: "", reservationCopy: "", specialOriginal: "", specialCopy: "", scstobcOriginal: "", scstobcCopy: "", migrationOriginal: "", migrationCopy: "", tcOriginal: "", tcCopy: "", studyOriginal: "", studyCopy: "", otherOriginal: "", otherCopy: ""
    });


    this.props.onChange({
      usn: "", name: "", stream: "", branch: "", currentSem: "", batch: "", mobile: "", DOB: "", gender: "",
      fatherName: "", fatherOccupation: "", fatherAge: "", fatherIncome: "", fatherMobile: "", incomeClaim: "",
      motherName: "", motherOccupation: "", motherAge: "", motherIncome: "", motherMobile: "",
      gaurdianName: "", gaurdianOccupation: "", gaurdianAge: "", gaurdianMobile: "",
      firstName: "", middleName: "", lastName: "", religion: "", caste: "", subCaste: "", blood: "", nationality: "", motherTongue: "", area: "", email: "", currentAddress: "", currentCity: "", currentState: "", country: "", pinCode: "", permAddress: "", permCity: "", permState: "", permCountry: "", permPincode: "", phone: "", emergencyContact: "", birthPlace: "", birthState: "", birthCountry: "", disability: "", disableType: "", backward: "", adharCard: "", siblings: "", entranceExam: "", admissionDate: "", admissionOrder: "", seatCatagoryAlloted: "", seatCatagoryClaimed: "", collegeCode: "", degreeLevel: "", jeeRank: "", schoolName: "", schoolBoard: "", schoolTown: "", schoolState: "", schoolRegNo: "", schoolPassYear: "", schoolMarkscardNo: "", schoolMedium: "", schoolMaxMarks: "", schoolMarks: "", schoolAggregate: "", collegeName: "", collegeBoard: "", collegeTown: "", collegeState: "", collegeCountry: "", collegePassYear: "", collegeRegNo: "", collegeMaxMarks: "", collegeMarks: "", collegeAggregate: "", collegeMarkscardNo: "", collegeMedium: "", attempts: "", sub1MaxMarks: "", sub2MaxMarks: "", sub3MaxMarks: "", sub1Marks: "", sub2Marks: "", sub3Marks: "", entranceOriginal: "", entranceCopy: "", sslcOriginal: "", sslcCopy: "", collegeOriginal: "", collegeCopy: "", reservationOriginal: "", reservationCopy: "", specialOriginal: "", specialCopy: "", scstobcOriginal: "", scstobcCopy: "", migrationOriginal: "", migrationCopy: "", tcOriginal: "", tcCopy: "", studyOriginal: "", studyCopy: "", otherOriginal: "", otherCopy: ""
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div class="container">
          <h1>STUDENT ENROLLMENT</h1>
          <div class="container">

            <h2>BASIC DETAILS</h2>
            <TextField
              required
              id="usn"
              type="String"
              label="USN"
              defaultValue="4VV16CS001"
              className={classes.textField}
              value={this.state.usn}
              onChange={this.handleChange('usn')}
              margin="normal"
            />
            <TextField
              required
              id="name"
              type="String"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
            <TextField
              id="stream"
              type="String"
              select
              required
              label="Stream"
              className={classes.textField}
              value={this.state.Stream}
              onChange={this.handleChange('stream')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="normal"
            >
              {Stream.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              id="branch"
              type="String"
              select
              required
              label="Branch"
              className={classes.textField}
              value={this.state.Branch}
              onChange={this.handleChange('branch')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="normal"
            >
              {Branch.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              required
              id="currentSem"
              label="Current Sem"
              value={this.state.currentSem}
              onChange={this.handleChange('currentSem')}
              type="Number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <TextField
              required
              rowsMax="7"
              id="batch"
              type="String"
              label="Batch"
              className={classes.textField}
              value={this.state.batch}
              onChange={this.handleChange('batch')}
              margin="normal"
            />
            <TextField
              rowsMax="10"
              id="mobile"
              type="Number"
              label="Mobile"
              className={classes.textField}
              value={this.state.mobile}
              onChange={this.handleChange('mobile')}
              margin="normal"
            />
            <TextField
              required
              rowsMax="10"
              id="DOB"
              type="String"
              label="DOB"
              className={classes.textField}
              value={this.state.DOB}
              onChange={this.handleChange('DOB')}
              margin="normal"
            />
            <TextField
              id="gender"
              type="String"
              select
              required
              label="Gender"
              className={classes.textField}
              value={this.state.Gender}
              onChange={this.handleChange('gender')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="normal"
            >
              {Gender.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>
          <div class="container">
            <h2>PARENT DETAILS</h2>
            <div class="container">
              <h3>Father Details</h3>
              <TextField
                required
                id="fatherName"
                type="String"
                label="Father Name"
                className={classes.textField}
                value={this.state.fatherName}
                onChange={this.handleChange('fatherName')}
                margin="normal"
              />
              <TextField
                required
                id="fatherOccupation"
                type="String"
                label="Father Occupation"
                className={classes.textField}
                value={this.state.fatherOccupation}
                onChange={this.handleChange('fatherOccupation')}
                margin="normal"
              />
              <TextField
                required
                id="fatherAge"
                type="Number"
                label="Father Age"
                className={classes.textField}
                value={this.state.fatherAge}
                onChange={this.handleChange('fatherAge')}
                margin="normal"
              />
              <TextField
                required
                id="fatherIncome"
                type="Number"
                label="Father Income"
                className={classes.textField}
                value={this.state.fatherIncome}
                onChange={this.handleChange('fatherIncome')}
                margin="normal"
              />
              <TextField
                rowsMax="10"
                id="fatherMobile"
                type="Number"
                label="Father Mobile"
                className={classes.textField}
                value={this.state.fatherMobile}
                onChange={this.handleChange('fatherMobile')}
                margin="normal"
              />
              <TextField
                required
                id="incomeClaim"
                type="String"
                label="Income Claim"
                className={classes.textField}
                value={this.state.incomeClaim}
                onChange={this.handleChange('incomeClaim')}
                margin="normal"
              />
            </div>
            <div class="container">
              <h3>Mother Details</h3>
              <TextField
                required
                id="motherName"
                type="String"
                label="Mother Name"
                className={classes.textField}
                value={this.state.motherName}
                onChange={this.handleChange('motherName')}
                margin="normal"
              />
              <TextField
                required
                id="motherOccupation"
                type="String"
                label="Mother Occupation"
                className={classes.textField}
                value={this.state.motherOccupation}
                onChange={this.handleChange('motherOccupation')}
                margin="normal"
              />
              <TextField
                required
                id="motherAge"
                type="Number"
                label="Mother Age"
                className={classes.textField}
                value={this.state.motherAge}
                onChange={this.handleChange('motherAge')}
                margin="normal"
              />
              <TextField
                required
                id="motherIncome"
                type="Number"
                label="Mother Income"
                className={classes.textField}
                value={this.state.motherIncome}
                onChange={this.handleChange('motherIncome')}
                margin="normal"
              />
              <TextField
                rowsMax="10"
                id="motherMobile"
                type="Number"
                label="Mother Mobile"
                className={classes.textField}
                value={this.state.motherMobile}
                onChange={this.handleChange('motherMobile')}
                margin="normal"
              />
            </div>
            <div class="container">
              <h3>Gaurdian Details</h3>
              <TextField
                required
                id="gaurdianName"
                type="String"
                label="Gaurdian Name"
                className={classes.textField}
                value={this.state.gaurdianName}
                onChange={this.handleChange('gaurdianName')}
                margin="normal"
              />
              <TextField
                required
                id="gaurdianOccupation"
                type="String"
                label="Gaurdian Occupation"
                className={classes.textField}
                value={this.state.gaurdianOccupation}
                onChange={this.handleChange('gaurdianOccupation')}
                margin="normal"
              />
              <TextField
                required
                id="gaurdianAge"
                type="Number"
                label="Gaurdian Age"
                className={classes.textField}
                value={this.state.gaurdianAge}
                onChange={this.handleChange('gaurdianAge')}
                margin="normal"
              />
              <TextField
                rowsMax="10"
                id="gaurdianMobile"
                type="Number"
                label="Gaurdian Mobile"
                className={classes.textField}
                value={this.state.gaurdianMobile}
                onChange={this.handleChange('gaurdianMobile')}
                margin="normal"
              />
            </div>
          </div>
          <div class="container">
            <h2>STUDENT PERSONAL DETAILS</h2>
            <TextField
              required
              id="firstName"
              type="String"
              label="First Name"
              className={classes.textField}
              value={this.state.firstName}
              onChange={this.handleChange('firstName')}
              margin="normal"
            />
            <TextField
              id="middleName"
              type="String"
              label="Middle Name"
              className={classes.textField}
              value={this.state.middleName}
              onChange={this.handleChange('middleName')}
              margin="normal"
            />
            <TextField
              id="lastName"
              type="String"
              label="Last Name"
              className={classes.textField}
              value={this.state.lastName}
              onChange={this.handleChange('lastName')}
              margin="normal"
            />
            <TextField
              required
              id="religion"
              type="String"
              label="Religion"
              className={classes.textField}
              value={this.state.religion}
              onChange={this.handleChange('religion')}
              margin="normal"
            />
            <TextField
              required
              id="caste"
              type="String"
              label="Caste"
              className={classes.textField}
              value={this.state.caste}
              onChange={this.handleChange('caste')}
              margin="normal"
            />
            <TextField
              id="subCaste"
              type="String"
              label="Sub Caste"
              className={classes.textField}
              value={this.state.subCaste}
              onChange={this.handleChange('subCaste')}
              margin="normal"
            />
            <TextField
              rowsMax="3"
              id="blood"
              type="String"
              label="Blood"
              className={classes.textField}
              value={this.state.blood}
              onChange={this.handleChange('blood')}
              margin="normal"
            />
            <TextField
              required
              id="nationality"
              type="String"
              label="Nationality"
              className={classes.textField}
              value={this.state.nationality}
              onChange={this.handleChange('nationality')}
              margin="normal"
            />
            <TextField
              required
              id="motherTongue"
              type="String"
              label="Mother Tongue"
              className={classes.textField}
              value={this.state.motherTongue}
              onChange={this.handleChange('motherTongue')}
              margin="normal"
            />
            <TextField
              required
              id="area"
              type="String"
              label="Area"
              className={classes.textField}
              value={this.state.area}
              onChange={this.handleChange('area')}
              margin="normal"
            />
            <TextField
              required
              id="email"
              type="String"
              label="Email"
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin="normal"
            />
            <TextField
              required
              id="currentAddress"
              type="String"
              label="Current Address"
              className={classes.textField}
              value={this.state.currentAddress}
              onChange={this.handleChange('currentAddress')}
              margin="normal"
            />
            <TextField
              required
              id="currentCity"
              type="String"
              label="Current City"
              className={classes.textField}
              value={this.state.currentCity}
              onChange={this.handleChange('currentCity')}
              margin="normal"
            />
            <TextField
              required
              id="currentState"
              type="String"
              label="Current State"
              className={classes.textField}
              value={this.state.currentState}
              onChange={this.handleChange('currentState')}
              margin="normal"
            />
            <TextField
              required
              id="country"
              type="String"
              label="Country"
              className={classes.textField}
              value={this.state.country}
              onChange={this.handleChange('country')}
              margin="normal"
            />
            <TextField
              id="pinCode"
              type="Number"
              label="Pin Code"
              className={classes.textField}
              value={this.state.pinCode}
              onChange={this.handleChange('pinCode')}
              margin="normal"
            />
            <TextField
              required
              id="permAddress"
              type="String"
              label="Perm Address"
              className={classes.textField}
              value={this.state.permAddress}
              onChange={this.handleChange('permAddress')}
              margin="normal"
            />
            <TextField
              required
              id="permCity"
              type="String"
              label="Perm City"
              className={classes.textField}
              value={this.state.permCity}
              onChange={this.handleChange('permCity')}
              margin="normal"
            />
            <TextField
              required
              id="permState"
              type="String"
              label="Perm State"
              className={classes.textField}
              value={this.state.permState}
              onChange={this.handleChange('permState')}
              margin="normal"
            />
            <TextField
              required
              id="permCountry"
              type="String"
              label="Perm Country"
              className={classes.textField}
              value={this.state.permCountry}
              onChange={this.handleChange('permCountry')}
              margin="normal"
            />
            <TextField
              id="permPinCode"
              type="Number"
              label="Permanent Pin Code"
              className={classes.textField}
              value={this.state.permPinCode}
              onChange={this.handleChange('permPinCode')}
              margin="normal"
            />
            <TextField
              id="phone"
              type="Number"
              label="Phone"
              className={classes.textField}
              value={this.state.phone}
              onChange={this.handleChange('phone')}
              margin="normal"
            />
            <TextField
              rowsMax="12"
              id="emergencyContact"
              type="Number"
              label="Emergency Contact"
              className={classes.textField}
              value={this.state.emergencyContact}
              onChange={this.handleChange('emergencyContact')}
              margin="normal"
            />
            <TextField
              required
              id="birthPlace"
              type="String"
              label="Birth place"
              className={classes.textField}
              value={this.state.birthPlace}
              onChange={this.handleChange('birthPlace')}
              margin="normal"
            />
            <TextField
              required
              id="birthState"
              type="String"
              label="Birth State"
              className={classes.textField}
              value={this.state.birthState}
              onChange={this.handleChange('birthState')}
              margin="normal"
            />
            <TextField
              required
              id="birthCountry"
              type="String"
              label="Birth Country"
              className={classes.textField}
              value={this.state.birthCountry}
              onChange={this.handleChange('birthCountry')}
              margin="normal"
            />
            <TextField
              required
              id="disability"
              type="String"
              label="Disability"
              className={classes.textField}
              value={this.state.disability}
              onChange={this.handleChange('disability')}
              margin="normal"
            />
            <TextField
              id="disableType"
              type="String"
              label="Disable Type"
              className={classes.textField}
              value={this.state.disableType}
              onChange={this.handleChange('disableType')}
              margin="normal"
            />
            <TextField
              required
              id="backward"
              type="String"
              label="Backward"
              className={classes.textField}
              value={this.state.backward}
              onChange={this.handleChange('backward')}
              margin="normal"
            />
            <TextField
              id="adharCard"
              type="Number"
              label="Adhar Card"
              className={classes.textField}
              value={this.state.adharCard}
              onChange={this.handleChange('adharCard')}
              margin="normal"
            />
            <TextField
              id="siblings"
              type="String"
              label="Siblings"
              className={classes.textField}
              value={this.state.siblings}
              onChange={this.handleChange('siblings')}
              margin="normal"
            />
          </div>
          <div class="container">
            <h2>ADMISSION DETAILS</h2>
            <TextField
              required
              id="entranceExam"
              type="String"
              label="Entrance Exam"
              className={classes.textField}
              value={this.state.entranceExam}
              onChange={this.handleChange('entranceExam')}
              margin="normal"
            />
            <TextField
              id="admissionDate"
              type="String"
              label="Admission Date"
              className={classes.textField}
              value={this.state.admissionDate}
              onChange={this.handleChange('admissionDate')}
              margin="normal"
            />
            <TextField
              id="batch"
              type="String"
              label="Batch"
              className={classes.textField}
              value={this.state.batch}
              onChange={this.handleChange('batch')}
              margin="normal"
            />
            <TextField
              id="admissionOrder"
              type="Number"
              label="Admission Order"
              className={classes.admissionOrder}
              value={this.state.ad}
              onChange={this.handleChange('admissionOrder')}
              margin="normal"
            />
            <TextField
              id="seatCatagoryAlloted"
              type="String"
              label="Seat Catagory Alloted"
              className={classes.textField}
              value={this.state.seatCatagoryAlloted}
              onChange={this.handleChange('seatCatagoryAlloted')}
              margin="normal"
            />
            <TextField
              id="seatCatagoryClaimed"
              type="String"
              label="Seat Catagory Claimed"
              className={classes.textField}
              value={this.state.seatCatagoryClaimed}
              onChange={this.handleChange('seatCatagoryClaimed')}
              margin="normal"
            />
            <TextField
              id="collegeCode"
              type="String"
              label="College Code"
              className={classes.textField}
              value={this.state.collegeCode}
              onChange={this.handleChange('collegeCode')}
              margin="normal"
            />
            <TextField
              id="degreeLevel"
              type="String"
              label="Degree Level"
              className={classes.textField}
              value={this.state.degreeLevel}
              onChange={this.handleChange('degreeLevel')}
              margin="normal"
            />
            <TextField
              id="jeeRank"
              type="String"
              label="Jee Rank"
              className={classes.textField}
              value={this.state.jeeRank}
              onChange={this.handleChange('jeeRank')}
              margin="normal"
            />
          </div>
          <div class="container">
            <h2>ACADEMIC DETAILS</h2>
            <div class="container">
              <h3>School</h3>
              <TextField
                required
                id="schoolName"
                type="String"
                label="School Name"
                className={classes.textField}
                value={this.state.schoolName}
                onChange={this.handleChange('schoolName')}
                margin="normal"
              />
              <TextField
                required
                id="schoolBoard"
                type="String"
                label="School Board"
                className={classes.textField}
                value={this.state.schoolBoard}
                onChange={this.handleChange('schoolBoard')}
                margin="normal"
              />
              <TextField
                required
                id="schoolTown"
                type="String"
                label="School Town"
                className={classes.textField}
                value={this.state.schoolTown}
                onChange={this.handleChange('schoolTown')}
                margin="normal"
              />
              <TextField
                required
                id="schoolState"
                type="String"
                label="School State"
                className={classes.textField}
                value={this.state.schoolState}
                onChange={this.handleChange('schoolState')}
                margin="normal"
              />
              <TextField
                id="schoolRegNo"
                type="String"
                label="School RegNo"
                className={classes.textField}
                value={this.state.schoolRegNo}
                onChange={this.handleChange('schoolRegNo')}
                margin="normal"
              />
              <TextField
                required
                id="schoolPassYear"
                type="Number"
                label="School Pass Year"
                className={classes.textField}
                value={this.state.schoolPassYear}
                onChange={this.handleChange('schoolPassYear')}
                margin="normal"
              />
              <TextField
                id="schoolMarkscardNo"
                type="String"
                label="School MarkscardNo"
                className={classes.textField}
                value={this.state.schoolMarkscardNo}
                onChange={this.handleChange('schoolMarkscardNo')}
                margin="normal"
              />
              <TextField
                id="schoolMedium"
                type="String"
                label="School Medium"
                className={classes.textField}
                value={this.state.schoolMedium}
                onChange={this.handleChange('schoolMedium')}
                margin="normal"
              />
              <TextField
                id="schoolMaxMarks"
                type="Number"
                label="School Max Marks"
                className={classes.textField}
                value={this.state.schoolMaxMarks}
                onChange={this.handleChange('schoolMaxMarks')}
                margin="normal"
              />
              <TextField
                id="schoolMarks"
                type="Number"
                label="School Marks"
                className={classes.textField}
                value={this.state.schoolMarks}
                onChange={this.handleChange('schoolMarks')}
                margin="normal"
              />
              <TextField
                id="schoolAggregate"
                type="String"
                label="School Aggregate"
                className={classes.textField}
                value={this.state.schoolAggregate}
                onChange={this.handleChange('schoolAggregate')}
                margin="normal"
              />
            </div>
            <div class="container">
              <h3>PUC</h3>
              <TextField
                required
                id="collegeName"
                type="String"
                label="College Name"
                className={classes.textField}
                value={this.state.collegeName}
                onChange={this.handleChange('collegeName')}
                margin="normal"
              />
              <TextField
                required
                id="collegeBoard"
                type="String"
                label="College Board"
                className={classes.textField}
                value={this.state.collegeBoard}
                onChange={this.handleChange('collegeBoard')}
                margin="normal"
              />
              <TextField
                required
                id="collegeTown"
                type="String"
                label="College Town"
                className={classes.textField}
                value={this.state.collegeTown}
                onChange={this.handleChange('collegeTown')}
                margin="normal"
              />
              <TextField
                required
                id="collegeState"
                type="String"
                label="College State"
                className={classes.textField}
                value={this.state.collegeState}
                onChange={this.handleChange('collegeState')}
                margin="normal"
              />
              <TextField
                id="collegeRegNo"
                type="String"
                label="College RegNo"
                className={classes.textField}
                value={this.state.collegeRegNo}
                onChange={this.handleChange('collegeRegNo')}
                margin="normal"
              />
              <TextField
                required
                id="collegePassYear"
                type="Number"
                label="College Pass Year"
                className={classes.textField}
                value={this.state.collegePassYear}
                onChange={this.handleChange('collegePassYear')}
                margin="normal"
              />
              <TextField
                id="collegeMarkscardNo"
                type="String"
                label="College MarkscardNo"
                className={classes.textField}
                value={this.state.collegeMarkscardNo}
                onChange={this.handleChange('collegeMarkscardNo')}
                margin="normal"
              />
              <TextField
                id="collegeMedium"
                type="String"
                label="College Medium"
                className={classes.textField}
                value={this.state.collegeMedium}
                onChange={this.handleChange('collegeMedium')}
                margin="normal"
              />
              <TextField
                id="collegeMaxMarks"
                type="Number"
                label="College Max Marks"
                className={classes.textField}
                value={this.state.collegeMaxMarks}
                onChange={this.handleChange('collegeMaxMarks')}
                margin="normal"
              />
              <TextField
                id="collegeMarks"
                type="Number"
                label="College Marks"
                className={classes.textField}
                value={this.state.collegeMarks}
                onChange={this.handleChange('collegeMarks')}
                margin="normal"
              />
              <TextField
                id="collegeAggregate"
                type="String"
                label="College Aggregate"
                className={classes.textField}
                value={this.state.collegeAggregate}
                onChange={this.handleChange('collegeAggregate')}
                margin="normal"
              />
              <TextField
                id="country"
                type="String"
                label="Country"
                className={classes.textField}
                value={this.state.country}
                onChange={this.handleChange('country')}
                margin="normal"
              />
              <TextField
                id="attempts"
                type="Number"
                label="Attempts"
                className={classes.textField}
                value={this.state.attempts}
                onChange={this.handleChange('attempts')}
                margin="normal"
              />
              <TextField
                id="sub1MaxMarks"
                type="Number"
                label="Sub1 Max Marks"
                className={classes.textField}
                value={this.state.sub1MaxMarks}
                onChange={this.handleChange('sub1MaxMarks')}
                margin="normal"
              />
              <TextField
                id="sub2MaxMarks"
                type="Number"
                label="Sub2 Max Marks"
                className={classes.textField}
                value={this.state.sub2MaxMarks}
                onChange={this.handleChange('sub2MaxMarks')}
                margin="normal"
              />
              <TextField
                id="sub3MaxMarks"
                type="Number"
                label="Sub3 Max Marks"
                className={classes.textField}
                value={this.state.sub3MaxMarks}
                onChange={this.handleChange('sub3MaxMarks')}
                margin="normal"
              />
              <TextField
                id="sub1Marks"
                type="Number"
                label="Sub1 Marks"
                className={classes.textField}
                value={this.state.sub1Marks}
                onChange={this.handleChange('sub1Marks')}
                margin="normal"
              />
              <TextField
                id="sub2Marks"
                type="Number"
                label="Sub2 Marks"
                className={classes.textField}
                value={this.state.sub2Marks}
                onChange={this.handleChange('sub2Marks')}
                margin="normal"
              />
              <TextField
                id="sub3Marks"
                type="Number"
                label="Sub3 Marks"
                className={classes.textField}
                value={this.state.sub3Marks}
                onChange={this.handleChange('sub3Marks')}
                margin="normal"
              />
            </div>
          </div>
          <div class="container">
            <h2>DOCUMENTS</h2>
            <TextField
              id="entranceOriginal"
              type="Number"
              label="Entrance Original"
              className={classes.textField}
              value={this.state.entranceOriginal}
              onChange={this.handleChange('entranceOriginal')}
              margin="normal"
            />
            <TextField
              id="entranceCopy"
              type="Number"
              label="Entrance Copy"
              className={classes.textField}
              value={this.state.entranceCopy}
              onChange={this.handleChange('entranceCopy')}
              margin="normal"
            />
            <TextField
              id="sslcOriginal"
              type="Number"
              label="SSLC Original"
              className={classes.textField}
              value={this.state.sslcOriginal}
              onChange={this.handleChange('sslcOriginal')}
              margin="normal"
            />
            <TextField
              id="sslcCopy"
              type="Number"
              label="SSLC Copy"
              className={classes.textField}
              value={this.state.sslcCopy}
              onChange={this.handleChange('sslcCopy')}
              margin="normal"
            />
            <TextField
              id="collegeOriginal"
              type="Number"
              label="College Original"
              className={classes.textField}
              value={this.state.collegeOriginal}
              onChange={this.handleChange('collegeOriginal')}
              margin="normal"
            />
            <TextField
              id="collegeCopy"
              type="Number"
              label="College Copy"
              className={classes.textField}
              value={this.state.collegeCopy}
              onChange={this.handleChange('collegeCopy')}
              margin="normal"
            />
            <TextField
              id="reservationOriginal"
              type="Number"
              label="Reservation Original"
              className={classes.textField}
              value={this.state.reservationOriginal}
              onChange={this.handleChange('reservationOriginal')}
              margin="normal"
            />
            <TextField
              id="reservationCopy"
              type="Number"
              label="Reservation Copy"
              className={classes.textField}
              value={this.state.reservationCopy}
              onChange={this.handleChange('reservationCopy')}
              margin="normal"
            />
            <TextField
              id="specialOriginal"
              type="Number"
              label="Special Original"
              className={classes.textField}
              value={this.state.specialOriginal}
              onChange={this.handleChange('specialOriginal')}
              margin="normal"
            />
            <TextField
              id="specialCopy"
              type="Number"
              label="Special Copy"
              className={classes.textField}
              value={this.state.specialCopy}
              onChange={this.handleChange('specialCopy')}
              margin="normal"
            />
            <TextField
              id="scstobcOriginal"
              type="Number"
              label="SC/ST/OBC Original"
              className={classes.textField}
              value={this.state.scstobcOriginal}
              onChange={this.handleChange('scstobcOriginal')}
              margin="normal"
            />
            <TextField
              id="scstobcCopy"
              type="Number"
              label="SC/ST/OBC Copy"
              className={classes.textField}
              value={this.state.scstobcCopy}
              onChange={this.handleChange('scstobcCopy')}
              margin="normal"
            />
            <TextField
              id="migrationOriginal"
              type="Number"
              label="Migration Original"
              className={classes.textField}
              value={this.state.migrationOriginal}
              onChange={this.handleChange('migrationOriginal')}
              margin="normal"
            />
            <TextField
              id="migrationCopy"
              type="Number"
              label="Migration Copy"
              className={classes.textField}
              value={this.state.migrationCopy}
              onChange={this.handleChange('migrationCopy')}
              margin="normal"
            />
            <TextField
              id="tcOriginal"
              type="Number"
              label="TC Original"
              className={classes.textField}
              value={this.state.tcOriginal}
              onChange={this.handleChange('tcOriginal')}
              margin="normal"
            />
            <TextField
              id="tcCopy"
              type="Number"
              label="TC Copy"
              className={classes.textField}
              value={this.state.tcCopy}
              onChange={this.handleChange('tcCopy')}
              margin="normal"
            />
            <TextField
              id="studyOriginal"
              type="Number"
              label="Study Original"
              className={classes.textField}
              value={this.state.studyOriginal}
              onChange={this.handleChange('studyOriginal')}
              margin="normal"
            />
            <TextField
              id="studyCopy"
              type="Number"
              label="Study Copy"
              className={classes.textField}
              value={this.state.studyCopy}
              onChange={this.handleChange('studyCopy')}
              margin="normal"
            />
            <TextField
              id="otherOriginal"
              type="Number"
              label="Other Original"
              className={classes.textField}
              value={this.state.otherOriginal}
              onChange={this.handleChange('otherOriginal')}
              margin="normal"
            />

            <TextField
              id="otherCopy"
              type="Number"
              label="Other Copy"
              className={classes.textField}
              value={this.state.otherCopy}
              onChange={this.handleChange('otherCopy')}
              margin="normal"
            />
            <Button variant="contained" color="default" className={classes.button} >
              Upload
        <CloudUploadIcon className={classes.rightIcon} />
            </Button>
          </div>
        </div>
      </form>

    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);