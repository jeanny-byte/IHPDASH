
<template>
  <img class="header-image" src="IHP_PIC_LG.ico">
  <div class="container">
    <div class="form">

      <!-- Your dashboard UI components -->
      <div class="form-group">
        <label for="phoneNumber">Recipient's Phone Number:</label>
        <input id="phoneNumber" v-model="phoneNumber" placeholder="Enter Phone Number">
      </div>

      <div class="form-group">
        <label for="senderId">Sender ID:</label>
        <select id="senderId" v-model="senderId">
          <option v-for="(id, index) in senderIds" :key="index" :value="id">{{ id }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="message">Message (max 160 characters):</label>
        <textarea id="message" v-model="message" placeholder="Enter Message"></textarea>
      </div>

      <div class="form-group">
        <button @click="sendMessage">Send</button>
      </div>
    </div>

    <div class="toast" :class="toastClass">{{ toastMessage }}</div>
  </div>
  <v-card>
     <div class="campaign-history">
      <h2>Campaign History</h2>
      <table>
        <thead>
          <tr>
            <th>Sender ID</th>
            <th>Phone Number</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(campaign, index) in campaignHistory" :key="index">
            <td>{{ campaign.senderId }}</td>
            <td>{{ campaign.phoneNumber }}</td>
            <td>{{ campaign.message }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      phoneNumber: '',
      senderId: '',
      message: '',
      senderIds: ['IHP24', 'GEC Shalom'], // Replace with actual sender IDs
      toastMessage: '',
      toastClass: '',
      campaignHistory: [],
    };
  },
  methods: {
    async sendMessage() {
      const apiKey = 'WdYPw4WAXb96jMcf'; // Replace with your actual API key
      const apiUrl = `https://apps.mnotify.net/smsapi?key=${apiKey}&to=${this.phoneNumber}&msg=${encodeURIComponent(this.message)}&sender_id=${this.senderId}`;

      try {
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
          this.showToast('success', 'Message sent successfully');
          this.addToHistory(this.message, this.senderId, this.phoneNumber);

        } else {
          this.showToast('failure', 'Message sending failed');
        }
      } catch (error) {
        this.showToast('failure', 'An error occurred while sending the message');
        console.error(error);
      }
    },

    showToast(type, message) {
      this.toastClass = type;
      this.toastMessage = message;
      setTimeout(() => {
        this.toastClass = '';
        this.toastMessage = '';
      }, 3000);
    },

    addToHistory(message, senderId, phoneNumber) {
      this.campaignHistory.unshift({ message, senderId, phoneNumber });
      if (this.campaignHistory.length > 20) {
        this.campaignHistory.pop();
      }
    },
  },
};
</script>
<style>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 20px; /* Adjust the padding as needed */
}

.form {
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%; /* Make the form width 100% */
  max-width: 400px; /* Set a maximum width for the form */
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input, select, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}


.success {
  background: #28a745;
}

.failure {
  background: #dc3545;
}

.campaign-history {
  margin-top: 20px;
  padding-left: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
