// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract Patients {
    struct Patient {
        uint id;
        string bloodGroup;
        string allergies;
        string medications;
        string medicalHistory;
    }
    mapping(uint => Patient) public patients;
    uint public patientCount;
    function createPatient(string memory _bloodGroup, string memory _allergies, string memory _medications, string memory _medicalHistory) public {
        patientCount++;
        patients[patientCount] = Patient(patientCount, _bloodGroup, _allergies, _medications, _medicalHistory);
    }
    function getPatientCount() public view returns (uint) {
        return patientCount;
    }
    function getPatient(uint _patientId) public view returns (uint, string memory, string memory, string memory, string memory) {
        return (patients[_patientId].id, patients[_patientId].bloodGroup, patients[_patientId].allergies, patients[_patientId].medications, patients[_patientId].medicalHistory);
    }
}