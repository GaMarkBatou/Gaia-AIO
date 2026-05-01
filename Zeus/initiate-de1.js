chrome.storage.local.get('optionbg', (data) => {
    if (!data.optionbg) {
        // If empty, set a default value
        const defaultValue = ''; // Replace 'default_value' with your desired default
        chrome.storage.local.set({ optionbg: defaultValue }, () => {
            console.log(`Default value '${defaultValue}' set for optionbg.`);
            
        });
    } else {
        // If data exists, use it
        console.log('Default BG field');
    }
});

chrome.storage.local.get('optionCustSearc', (data) => {
    if (!data.optionCustSearc) {
        // If empty, set a default value
        const defaultValue = "<button id='' type='button' class='toprightnow' data-tstatus='alle Offenen, nicht behoben' data-group='TCS.DF.HU.OPS.L1.DE1' data-kname='' data-suchk='Netzname = "%SDW%" or Netzname = "%SDX%"' data-main='0' title=''>SD-WAN</button><button id='' type='button' class='toprightnow' data-tstatus='alle Offenen, nicht behoben' data-group='TCS.DF.HU.OPS.L1.DE1' data-kname='Schaeffler Technologies AG & Co. KG' data-suchk='' data-main='0' title=''>Schaeffler</button><button id='' type='button' class='toprightnow' data-tstatus='alle Offenen, nicht behoben' data-group='TCS.DF.HU.OPS.L1.DE1' data-kname='MAN Truck & Bus SE' data-suchk='' data-main='0' title=''>MAN</button><button id='' type='button' class='toprightnow' data-tstatus='alle Offenen, nicht behoben' data-group='TCS.DF.HU.OPS.L1.DE1' data-kname='ITSCare GbR - IT-Services für den Gesundheitsmarkt GbR' data-suchk='' data-main='0' title=''>ITSCare</button>"; 
        chrome.storage.local.set({ optionCustSearc: defaultValue }, () => {
            console.log(`Default value '${defaultValue}' set for optionCustSearc.`);
            
        });
    } else {
        // If data exists, use it
        console.log('Default Customer Search field');
    }
});

chrome.storage.local.get('dropdownOptions', (data) => {
    if (!data.dropdownOptions) {
        // If empty, set a default value
		const ksOptions = [ 

			{ 

				"text": "----Erstmeldung----", 

				"value": "" 

			}, 

			{ 

				"text": "Proaktiv GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nwir haben einen Ausfall einer bei uns aktiv gemanagten Ressource erkannt und hierfür dieses Ticket generiert. Aktuell arbeiten wir an der Beseitigung des Fehlers. Bitte teilen Sie uns zeitnah mit, wenn Ihnen Wartungsarbeiten oder Stromabschaltungen (bzw. Stromausfälle) am betroffenen Standort bekannt sein sollten. Für Informationen oder Rückfragen wenden Sie sich bitte, unter Angabe unserer Ticket ID, an unseren Service Desk. Wir werden Sie in regelmäßigen Abständen über den aktuellen Bearbeitungsstand informieren.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Proaktiv ENG", 

				"value": "Dear Sir or Madam,\n\nWe have proactively identified an outage which is affecting the services (technical resources) we are providing to you. Therefore, we have generated a trouble ticket and are currently investigating this matter. Please contact our Service Desk, quoting our ticket number, in case you have any information concerning maintenance work or activities affecting the power supply at the location of the customer.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Reaktiv GER", 

				"value": "Sehr geehrte Damen und Herren,\n\ndie von Ihnen gemeldete Störung wird unter der oben genannten Trouble-Ticket-Nummer bearbeitet. Die zuständige Servicestelle wurde umgehend beauftragt.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Reaktiv ENG", 

				"value": "Dear Sir or Madam,\n\nWith reference to the fault as reported by you, we have opened the above stated trouble ticket. This matter will be directly forwarded to the relevant service unit.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Basic check GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nwir könnten den Ansprechpartner (Herr/Frau ) leider nicht erreichen. Bitte teilen Sie uns zeitnah mit, wenn Ihnen Wartungsarbeiten oder Stromabschaltungen (bzw. Stromausfälle) am betroffenen Standort bekannt sein sollten. Im nächsten Schritt müssen Sie einen Router- und Modemneustart durchführen. Danach teilen Sie uns bitte den LED-Status mit. Prüfen Sie bitte, ob mit der Verkabelung alles in Ordnung ist, und senden Sie uns die Öffnungszeiten und einen erreichbaren Ansprechpartner, falls unser Partner einen Servicetechniker zum Standort schicken möchte. Wir warten auf Ihre Rückmeldung und setzen bis dahin das Ticket aus.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Basic check ENG", 

				"value": "Dear Sir or Madam,\n\nWe could not reach the local contact (Mr./Mrs. ). Please promptly inform us if you are aware of any maintenance work or power shutdowns (or power failures) at the affected location. Please perform a reboot of the specific device, if possible. Afterwards, please inform us of the LED status and check if the wiring is correct, then send us the opening hours and a valid local contact in case our partner wishes to send a service technician to the location. Until your response we will place our ticket on hold.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Tüv/Itscare", 

				"value": "Sehr geehrte Damen und Herren,\n\nwir könnten den Ansprechpartner (Herr/Frau ) leider nicht erreichen. Bitte teilen Sie uns zeitnah mit, wenn Ihnen Wartungsarbeiten oder Stromabschaltungen (bzw. Stromausfälle) am betroffenen Standort bekannt sein sollten. Bitte senden Sie uns die Öffnungszeiten und die Rufnummer des Ansprechpartners, falls unser Partner einen Servicetechniker zum Standort schicken möchte. Wir warten auf Ihre Rückmeldung und setzen bis dahin das Ticket aus.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "----Zwischenmeldung----", 

				"value": "" 

			}, 

			{ 

				"text": "Service GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nwir haben die Störung an unsere Servicestelle weitergemeldet. Wenn wir neue Informationen bekommen, werden wir Sie benachrichtigen.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Service ENG", 

				"value": "Dear Sir or Madam,\n\nThis outage is under investigation by the responsible service unit. We will update you as soon as we receive any further information.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "2nd level GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nwir haben die Störung an unsere Second Level Kollegen weitergemeldet. Wenn wir neue Informationen bekommen, werden wir Sie benachrichtigen.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "2nd level ENG", 

				"value": "Dear Sir or Madam,\n\nThis outage is under investigation by the responsible 2nd level unit. We will update you as soon as we receive any further information.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "ASP+ÖZ GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nWir konnten bisher den Ansprechpartner (Herr/Frau ) leider nicht erreichen. Zur weiteren Störungsbearbeitung brauchen wir die Information, ob es vor Ort Stromabschaltungen oder Wartungsarbeiten gibt. Deshalb möchten wir Sie darum bitten, uns einen erreichbaren Ansprechpartner vor Ort zu geben, der eventuell einem Servicetechniker Zugang gewähren kann. Bitte geben sie uns auch die Öffnungszeiten. Wir brauchen diese Informationen zur weiteren Bearbeitung dieser Störung und setzen das Ticket bis zu Ihrer Antwort aus.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "ASP+ÖZ ENG", 

				"value": "Dear Sir or Madam,\n\nWe could not reach the local contact (Mr./Mrs. ). Please promptly inform us if you are aware of any maintenance work or power shutdowns (or power failures) at the affected location. Please perform a reboot of the specific device, if possible. Afterwards, please inform us of the LED status and check if the wiring is correct, then send us the opening hours and a valid local contact in case our partner wishes to send a service technician to the location. Until your response we will place our ticket on hold.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Needs appt. GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nder Fehler besteht leider weiterhin. Wegen des Zugangstermins haben wir bereits Kontakt mit den Ansprechpartnern aufgenommen. Wir warten auf Ihre Antwort. Bis dahin setzen wir unser Ticket aus.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": " Needs appt. ENG", 

				"value": "Dear Sir or Madam,\n\nThe error is unfortunately still existing. We have already contacted the responsible person on site to clarify when the technicians can go to the location. We are waiting for his/her feedback. Until then we put the ticket on hold.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Management fb GER ", 

				"value": "Sehr geehrte Damen und Herren,\n\nwir wollen Sie hiermit informieren, dass wir mehrere Informationen von unserem Management erwarten, um mit der Entstörung fortzufahren. Bis zu seiner Rückmeldung halten wir das Ticket an.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Management fb ENG", 

				"value": "Dear Sir or Madam,\n\nWe would like to let you know that we are waiting for the advice of our management to progress the investigation of this issue. Until their feedback we are placing this ticket on hold, and we will stop sending customer reports. As soon as we receive feedback from them, we will inform you accordingly.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "RAZ GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nWir werden Sie umgehend informieren, wenn uns ein aktueller Status im Rahmen der Entstörung vorliegt und die Zwischenmeldungen bis dahin aussetzen.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "RAZ ENG", 

				"value": "Dear Sir or Madam,\n\nWe are waiting for further information. We will update you as soon as we receive further information, until then we stop the interim reports.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Kein Zutritt GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nda der Zutritt zur Kundenlokation heute nicht mehr möglich ist, wird die weitere Entstörung in der Regelarbeitszeit fortgesetzt. Ihr Einverständnis vorausgesetzt, werden wir, bis uns neue Ergebnisse vorliegen, die Zwischenmeldungen aussetzen.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Kein Zutritt ENG", 

				"value": "Dear Sir or Madam,\n\nFor further fault clearance, we require access to the site. Unfortunately, we cannot reach the local contact person today - therefore we will resume the troubleshooting during the next available business hours. If you can provide us a reachable on-site contact person, please inform us. Until the regular business hours we put the ticket on hold.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Major GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nwir haben die Information von unserer Servicestelle bekommen, dass ein Großausfall vorliegt. Über die Entstörungsdauer kann leider zurzeit noch keine Aussage getroffen werden. Wir bitten um Ihr Verständnis.\nBis zum Zeitpunkt neuer Ergebnisse werden wir - Ihr Einverständnis vorausgesetzt - die Zwischenmeldungen aussetzen.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Major ENG", 

				"value": "Dear Sir or Madam,\n\nWe have been informed that your access line is being affected by a major outage. All necessary steps required to resolve this fault are being taken. We will contact you as soon as new information concerning the resolution of this outage is available.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Wartung GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nWir möchten Sie darüber informieren, dass aufgrund geplanter Wartungsarbeiten möglicherweise Fehler auf Ihrer Leitung auftreten können.\nWartungsfenster:\nWir entschuldigen uns für etwaige Unannehmlichkeiten, die diese erforderlichen Wartungsarbeiten verursachen können. \n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Wartung ENG", 

				"value": "Dear Sir or Madam,\n\nWe would like to inform you that due to scheduled maintenance, it is possible that errors may occur on your access line.\nMaintenance window:\nWe are sorry for any inconvenience that this necessary maintenance may cause.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Monitoring GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nwir haben festgestellt, dass die Leitung wieder stabil funktioniert. Wir werden die Leitung aus Qualitätsgründen weiterhin beobachten. Wenn uns neue Informationen vorliegen, werden wir Sie benachrichtigen.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Monitoring ENG", 

				"value": "Dear Sir or Madam,\n\nWe detected that the line is up and working stable again. In the next hours we are going to monitor the line for quality reasons. During the monitoring we put the ticket on hold.\nAs soon as we receive the results of the long-term measurement, we will inform you.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "ST Aw GER ", 

				"value": "Sehr geehrte Damen und Herren,\n\nein Servicetechniker wurde durch die zuständige Servicestelle zur Störungseingrenzung und -beseitigung angewiesen. Wir haben leider noch keine Information darüber, wann der Techniker vor Ort sein wird.\nSobald wir Neuigkeiten erhalten, werden wir Sie umgehend benachrichtigen.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": " ST Aw ENG", 

				"value": "Dear Sir or Madam,\n\nYour case has been assigned to a service technician at our Service partner. We have no information about the exact time when the technician will arrive to the site.\nWe will update you as soon as we receive any further information.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "ST Termin GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nder Servicetechniker wurde durch die zuständige Servicestelle zur Störungseingrenzung und -beseitigung angewiesen. Er wird den Standort um ca. xxx erreichen. Bis zu diesem Zeitpunkt setzen wir das Ticket aus. Sobald wir weitere Informationen erhalten, werden wir Sie umgehend benachrichtigen.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": " ST Termin ENG", 

				"value": "Dear Sir or Madam,\n\nYour case has been assigned to a service technician at our Servicepartner. His estimated time of arrival is xxx. Until this time we put the ticket on hold. We will update you as soon as we receive any further information.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "ST noch GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nunser Servicetechniker ist noch aktiv mit der Eingrenzung und Beseitigung der von Ihnen gemeldeten Störung beschäftigt. Wir werden Sie umgehend informieren, wenn uns ein neuer Status vorliegt.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": " ST noch ENG", 

				"value": "Dear Sir or Madam,\n\nOur service technician is still working on this fault. We will inform you of any new developments which are reported to us. Until the end of their investigation - with your consent - we will keep our ticket on hold. We will inform you of any new developments which are reported to us.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": " Gekündigt GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nwir haben die Information vom Ansprechpartner bekommen, dass der Router gekündigt wurde. Wir nehmen den Kontakt mit dem Service Manager auf, um die Information bestätigen zu lassen. Sobald wir ein Update bekommen, werden wir Sie informieren.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Gekündigt ENG", 

				"value": "Dear Sir or Madam,\n\nWe have received the information from the given local contact that the router was turned off because of cancellation.\nWe have contacted the Service Manager to verify this information and to remove the canceled router from our database to prevent fake ticket opening in the future.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Escalated GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nDiese Störung wurde eskaliert. Wir entschuldigen uns für eventuelle Unannehmlichkeiten und danken Ihnen für Ihr Verständnis und Ihre Geduld.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Escalated ENG", 

				"value": "Dear Sir or Madam,\n\nThis issue has been escalated. We apologize for any inconvenience and thank you for your understanding and patience.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "----Abschlussmeldung----", 

				"value": "" 

			}, 

			{ 

				"text": " Kurzzeit GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nunser aktives Netzmanagement hatte einen Kurzzeitausfall in Ihrem Netz erkannt. Die Verbindung ist inzwischen wieder aktiv. Wir schließen unser aktuelles Trouble Ticket nach der Vereinbarung im Service Level Agreement.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Kurzzeit ENG", 

				"value": "Dear Sir or Madam,\n\nThe fault is no longer visible, and the line is up and running. This location is now reachable via our network management system. There was a short-time outage on the line. In accordance with the terms of our service level agreement we are now closing this ticket.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Normal GER", 

				"value": "Sehr geehrte Damen und Herren,\n\ndie Störung wurde im Zuge der Fehlereingrenzung durch die Servicestelle behoben. Der Standort ist über unser aktives Netzmanagement wieder erreichbar und die Leitung ist stabil. Wir schließen deshalb unser aktuelles Trouble Ticket nach der Vereinbarung im Service Level Agreement.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Normal ENG", 

				"value": "Dear Sir or Madam,\n\nThe fault is no longer visible, and the line is up and running. This location is now reachable via our network management system. In accordance with the terms of our service level agreement we are now closing this ticket. Should you experience further outages – please do not hesitate to inform us and we will investigate further.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Strom GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nder Standort ist über unser aktives Netzmanagement wieder erreichbar und die Leitung ist stabil. Der Ausfall wurde durch ein Stromversorgungsproblem verursacht. Wir schließen deshalb unser aktuelles Trouble Ticket nach der Vereinbarung im Service Level Agreement.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Strom ENG", 

				"value": "Dear Sir or Madam,\n\nThis location is now reachable via our network management system. The line is up and running stable. This fault was caused by a power failure. Therefore, we are closing this trouble ticket.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Kein Fehler GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nIhre Ressource wurde auf Funktionsfähigkeit geprueft. Zum Zeitpunkt der Qualitätsmessung konnten keine Fehler festgestellt werden. Die Störungsbearbeitung wurde von der Servicestelle abgeschlossen. Wir schließen das aktuelle Trouble Ticket nach der Vereinbarung im Service Level Agreement.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Kein Fehler ENG", 

				"value": "Dear Sir or Madam,\n\nWe have carried out our tests and checked all the components supported by our service department. These tests have been proven successful, and no errors or faults were detected on any of the equipment supported by us. For this reason, we are closing our trouble ticket in accordance with our service level agreement.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Baugruppe GER", 

				"value": "Sehr geehrte Damen und Herren,\n\ndie Leitung ist wieder up. Der Ausfallgrund war ein Hardwarefehler, der bereits behoben wurde. Wir schließen unser aktuelles Ticket nach der Vereinbarung im Service Level Agreement.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Baugruppe ENG", 

				"value": "Dear Sir or Madam,\n\nThe line is working fine again. The reason for outage was a faulty hardware that has been replaced. Therefore, we are closing this ticket.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Wartung GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nBitte beachten Sie, dass die Wartungsarbeiten beendet sind. Alle Dienste sind wieder voll funktionsfähig. Wir schließen das aktuelle Trouble Ticket.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Wartung ENG", 

				"value": "Dear Sir or Madam,\n\nPlease be informed that the maintenance work is over. All services are fully operational again; therefore, we are closing our ticket.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Gekündigt GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nwir haben die Information, dass der Router gekündigt wurde. Deshalb schließen wir unser aktuelles Ticket.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": " Gekündigt ENG", 

				"value": "Dear Sir or Madam,\n\nWe have the information that the router is canceled. Therefore we are going to close our trouble ticket.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "5 Tage GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nwir möchten Sie hiermit informieren, dass die Störung beseitigt wurde. Können Sie uns die Funktionalität bestätigen? Sollten wir innerhalb der nächsten 5 Tage keine Rückmeldung von Ihnen erhalten, wird das aktuelle Störungsticket automatisch geschlossen.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "5 Tage ENG", 

				"value": "Dear Sir or Madam,\n\nWe would like to inform you that the present ticket is regarded as resolved from our side. Could you please confirm the functionality? If we do not receive your feedback in the following 5 days, the ticket will be closed automatically.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Kein MDR/RM GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nda die für das Eingrenzen der Störung notwendigen Angaben durch Sie nicht geliefert werden konnten gehen wir davon aus, dass die Störung aktuell nicht mehr besteht, und schließen das Ticket.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Kein MDR/RM ENG", 

				"value": "Dear Sir or Madam,\n\nBecause we have not received the missing data that we need to solve your issue, we assume that your service is working again. We will proceed with ticket closure.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "----Miscellaneous ----", 

				"value": "" 

			}, 

			{ 

				"text": "Doppel TT GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nBitte beachten Sie, dass die Untersuchung im anderen Ticket --- noch andauert. Da es sich um ein Duplikat handelt, werden wir dieses Ticket schließen und Ihnen alle relevanten Aktualisierungen im genannten Ticket zukommen lassen.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Doppel TT ENG", 

				"value": "Dear Sir or Madam,\n\nPlease be advised that the investigation is ongoing on the other ticket: ---. As this is a duplicate ticket we are going to close it and we will share all the relevant updates with you in the referred ticket.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Anderes TT GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nBitte beachten Sie, dass der Fall im Ticket --- untersucht wird. Bis unsere Untersuchung in diesem Ticket abgeschlossen ist, werden wir keine Zwischenmeldungen senden.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Anderes TT ENG", 

				"value": "Dear Sir or Madam,\n\nPlease be informed that the case is under investigation in the ticket ---. Until our investigation is concluded in that ticket, we will stop sending customer messages.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Workload GER", 

				"value": "Sehr geehrte Damen und Herren,\n\nBitte entschuldigen Sie die verspätete Rückmeldung. Wir bitten vielmals um Entschuldigung – aufgrund einer derzeit außergewöhnlich hohen Arbeitsbelastung verzögert sich unsere Antwort.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "Workload ENG", 

				"value": "Dear Sir or Madam,\n\nWe would like to let you know that the cause for the delay in handling your issue is an increased number of high priority issues. We ask you for understanding – please accept our apologies for any inconvenience caused.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "False alarm GER", 

				"value": "Sehr geehrte Damen und Herren,\n\ndas Ticket wurde aufgrund eines falschen Alarms generiert. Der Standort ist über unser aktives Netzmanagement erreichbar, und die Leitungen funktionieren stabil. Wir schließen deshalb unser aktuelles Trouble Ticket nach der Vereinbarung im Service Level Agreement.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": " False alarm ENG", 

				"value": "Dear Sir or Madam,\n\nThe ticket was generated due to a false alarm. The site is reachable via our active network management, and the lines are functioning stably. We are therefore closing our current trouble ticket in accordance with the Service Level Agreement.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": " COA", 

				"value": "Dear Sir or Madam,\n\nThe customer owned internet line is up since xxx. All services are available. We are therefore closing our current trouble ticket in accordance with the Service Level Agreement.\n\nBest regards\nDeutsche Telekom\nService Desk" 

			}, 

			{ 

				"text": "ITENOS ", 

				"value": "Sehr geehrte Damen und Herren,\n\ndie Änderungen sind erfolgreich durchgeführt. Sollten wir innerhalb der nächsten 5 Tage keine Rückmeldung von Ihnen erhalten, wird das aktuelle Störungsticket automatisch geschlossen.\n\nFreundliche Grüße\nDeutsche Telekom\nService Desk" 

			} 

		]; 
		// Converter: https://codepen.io/jsnelders/pen/qBByqQy
		//{ value: '', text: '---------' },
	
        const defaultValue = ksOptions; // 
        chrome.storage.local.set({ dropdownOptions: defaultValue }, () => {
            console.log(`Default value '${defaultValue}' set for dropdownOptions.`);
            
        });
    } else {
        // If data exists, use it
        console.log('Default KS field');
    }
});

chrome.storage.local.get('custRessOption', (data) => {
    if (!data.custRessOption) {
        // If empty, set a default value
        const defaultValue = "<button id='manInsert' type='button' class='toprightnow' data-text='MAN Truck & Bus SE' title='MAN Truck & Bus SE'>MAN</button><button id='itscInsert' type='button' class='toprightnow' data-text='ITSCare GbR - IT-Services für den Gesundheitsmarkt GbR' title='ITSCare GbR - IT-Services für den Gesundheitsmarkt GbR'>ITSCARE</button><button id='schtInsert' type='button' class='toprightnow' data-text='Schaeffler Technologies AG & Co. KG' title='Schaeffler Technologies AG & Co. KG'>Schaeffler</button><button id='zffInsert' type='button' class='toprightnow' data-text='ZF Friedrichshafen AG' title='ZF Friedrichshafen AG'>ZF</button><button id='bmwInsert' type='button' class='toprightnow' data-text='Bayerische Motoren Werke AG' title='Bayerische Motoren Werke AG'>BMW</button>"; 
        chrome.storage.local.set({ custRessOption: defaultValue }, () => {
            console.log(`Default value '${defaultValue}' set for custRessOption.`);
            
        });
    } else {
        // If data exists, use it
        console.log('Default Customer Ressource');
    }
});


chrome.storage.local.get('defaultEmailAddress', (data) => {
        // If empty, set a default value
        const defaultValue = 'FMB.FMB-TS-ITSH-SICDE@telekom.com';
        chrome.storage.local.set({ defaultEmailAddress: defaultValue }, () => {
            console.log(`Default value '${defaultValue}' set for defaultEmailAddress.`);
            
        });
});

chrome.storage.local.get('defaultEmailLim1', (data) => {

        // If empty, set a default value
        const defaultValue = 'DL-TS_TCS_DF_OPS_BLS_NEARSHORE01@telekom.com';
        chrome.storage.local.set({ defaultEmailLim1: defaultValue }, () => {
            console.log(`Default value '${defaultValue}' set for defaultEmailLim1.`);
            
        });

});

chrome.storage.local.get('defaultEmailLim2', (data) => {

        // If empty, set a default value
        const defaultValue = 'DeescalationmanagementSOP@telekom.de';
        chrome.storage.local.set({ defaultEmailLim2: defaultValue }, () => {
            console.log(`Default value '${defaultValue}' set for defaultEmailLim2.`);
            
        });

});

chrome.storage.local.get('defaulCallLC', (data) => {

        // If empty, set a default value
        const defaultValue = "de1";
        chrome.storage.local.set({ defaulCallLC: defaultValue }, () => {
            console.log(`Default value '${defaultValue}' set for defaulCallLC.`);
            
        });

}); 


/* chrome.storage.local.get('defaultEmailAddress', (data) => {
    input.value = data.defaultEmailAddress || ''; // Load the value, default to an empty string if `defaultEmailAddress` is undefined
}); */
