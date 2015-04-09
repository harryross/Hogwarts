namespace Hogwarts.Api.Helpers
{
	public class JsonProperty
	{
		public static string GetType(string value)
		{
			var temp = value.Trim();

			// string
			var isString = (temp[0] == '\'') && (temp[temp.Length - 1] == '\'');
			if (isString)
			{
				return JsonType.String.ToString().ToLower();
			}
				
			// null
			if (temp == "null")
			{
				return JsonType.Null.ToString().ToLower();
			}

			// boolean
			if (temp == "true" || temp == "false")
			{
				return JsonType.Boolean.ToString().ToLower();
			}

			// integer
			int intResult;
			var isInteger = int.TryParse(temp, out intResult);
			if (isInteger)
			{
				return JsonType.Integer.ToString().ToLower();
			}

			// number
			float numResult;
			var isNumber = float.TryParse(temp, out numResult);
			if (isNumber)
			{
				return JsonType.Number.ToString().ToLower();
			}

			// array

			// object

			return JsonType.Unknown.ToString().ToLower();
		}

		private enum JsonType
		{
			Array,
			Boolean,
			Integer,
			Number,
			Null,
			Object,
			String,
			Unknown,
		}
	}
}