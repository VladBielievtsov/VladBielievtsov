import React from 'react'

export default function Page() {
  return (
    <main className='px-7 py-10 overflow-x-hidden'>
      <div className="prose max-w-article! mx-auto!">
        <p>Miyuki&apos;s</p>
        <h1 className="text-xl mb-0!">Privacy Policy</h1>
        <h2 id="usage-of-data">Usage of Data</h2>
        <p>The bot may use stored data, as defined below, for different features including but not limited to: Welcoming joining users (when enabled) and command handling.
          No usage of data outside of the aforementioned cases will happen and the data is not shared with any 3rd-party site or service.</p>
        <h2 id="stored-information">Stored Information</h2>
        <p>The bot may store the following information automatically when being invited to a new Discord Server:</p>
        <ul>
          <li><code>id</code> with the Server&apos;s ID as value.</li>
          <li><code>name</code> with the Server&apos;s name</li>
        </ul>
        <p>Additionally, certain server-specific configurations such as the <code>mod_role</code>, <code>report_channel</code>, and <code>modlog_channel</code> are not automatically stored. These settings are only stored if configured by the server administrator through the use of specific bot commands.</p>
        <p>If users set an AFK status, the bot may store the following data for each user:</p>
        <ul>
          <li><code>user</code> The Discord user&apos;s ID.</li>
          <li><code>guild</code> The server where the user is in.</li>
          <li><code>reason</code> The reason the user set for being AFK.</li>
          <li><code>name</code> - The username of the user when they set their AFK status.</li>
        </ul>
        <p>No other information outside of the above mentioned will be stored.</p>
        <h2 id="updating-data">Updating Data</h2>
        <p>The data may be updated when using specific features of the bot.
          Such updates of data often requires the input of a user, including data that can be seen as identifiable and sensitive, such as text messages. This data is only kept in the database and only used for its intended purpose.</p>
        <h2 id="removal-of-data">Removal of Data</h2>
        <h3 id="automatic-removal">Automatic removal</h3>
        <p>Stored Data can be removed automatically through means of removing the bot from a Server. This can be achieved by using the moderation features provided by Discord.
          Re-adding the bot back to the server will store data again, as described in the&nbsp;Stored Information&nbsp;section of this policy.</p>
        <h3 id="manual-removal">Manual removal</h3>
        <p>Manual removal of the data can be requested through email at&nbsp;<a href="mailto:vladbieilievtsov@gmail.com">vladbieilievtsov@gmail.com</a>.
          For security reasons will we ask you to provide us with proof of ownership of the server, that you wish the data to be removed of. Only a server owner may request manual removal of data and requesting it will result in the bot being removed from the server, if still present on it.</p>
      </div>
    </main >
  )
}
